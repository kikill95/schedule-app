import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { StorageService } from './storage';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ScheduleService {
  serverUrl: string = 'http://schedule-server-api.herokuapp.com/info';
  storageKey: string = 'TABLE';

  constructor (
    private http: Http,
    private storage: StorageService) {}

  getTable() {
    return this.http.get(this.serverUrl)
      .map(this.extractData.bind(this))
      .catch(this.handleError.bind(this));
  }

  public extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = {
      table: res.json().data,
      time: new Date().getTime()
    };
    this.storage.saveData('lastSyncDate', new Date().getTime());
    this.storage.saveData(this.storageKey, body);
    return body;
  }

  public handleError(error: any) {
    return Observable.create(observer => {
      observer.next(this.storage.getData(this.storageKey));
    });
  }

}
