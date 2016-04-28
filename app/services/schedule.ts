import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class ScheduleService {
  constructor (private http: Http) {}

  private _serverUrl = 'http://schedule-server-api.herokuapp.com/info';

  getTable() {
    return this.http.get(this._serverUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    let errMsg = error.message || 'Server error';
    console.error(errMsg);
    return errMsg;
  }

}
