import {Injectable} from 'angular2/core';

@Injectable()
export class TableFormatterService {

  constructor () {}

  performByChosenCourse(tables, course) {
    let positions: Array<number> = [],
      ourIndexes:boolean = false;
    tables[0].forEach((el, position) => {
      if (ourIndexes && el !== '') {
        ourIndexes = false;
      }
      if (el === course || ourIndexes) {
        positions.push(position);
        ourIndexes = true;
      }
    });
    return tables.map((table) => {
      return table.filter((el, position) => {
        return positions.indexOf(position) > -1;
      })
    });
  }

}
