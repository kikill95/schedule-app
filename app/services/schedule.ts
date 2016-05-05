import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {StorageService} from './storage';
import {Network, Connection} from 'ionic-native';
import 'rxjs/Rx';
import {Observable}    from 'rxjs/Observable';

@Injectable()
export class ScheduleService {
  serverUrl: string = 'http://schedule-server-api.herokuapp.com/info';
  storageKey: string = 'TABLE';

  constructor (private http: Http, private storage: StorageService) {}

  getTable() {
    if (Network.connection === Connection.NONE) {
      return Observable.create(observer => {
          observer.next(this.storage.getData(this.storageKey));
        });
    }

    return this.http.get(this.serverUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public extractData = (res: Response) => {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = {
      table: res.json().data,
      time: new Date().getTime()
    };
    this.storage.saveData(this.storageKey, body);
    return body;
  }

  public handleError = (error: any) => {
    let errMsg = error.message || 'Server error';
    console.error(errMsg);
    return errMsg;
  }

}
