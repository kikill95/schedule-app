import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {StorageService} from './storage';
import 'rxjs/Rx';

@Injectable()
export class ScheduleService {
  serverUrl: string = 'http://schedule-server-api.herokuapp.com/info';
  storageKey: string = 'TABLE';

  constructor (private http: Http) {}

  getTable() {
    var extractData = (res: Response) => {
      if (res.status < 200 || res.status >= 300) {
        throw new Error('Bad response status: ' + res.status);
      }
      let body = {
        table: res.json().data,
        time: new Date().getTime()
      };
      new StorageService().saveData(this.storageKey, body);
      return body;
    }

    var handleError = (error: any) => {
      let errMsg = error.message || 'Server error';
      console.error(errMsg);
      return errMsg;
    }

    return this.http.get(this.serverUrl)
      .map(extractData)
      .catch(handleError);
  }

}
