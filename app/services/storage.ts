import {Injectable} from 'angular2/core';

@Injectable()
export class StorageService {
  constructor () {}

  saveData(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  }

  getData(key) {
    return JSON.parse(localStorage.getItem(key) || '');
  }

}
