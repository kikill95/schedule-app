import { Injectable } from '@angular/core';

@Injectable()
export class TableFormatterService {

  constructor () {}

  performByChosenCourse(tables, course) {
    let positions: Array<number> = [],
      ourIndexes: boolean = false;

    tables[0].forEach((el, position, arr) => {
      if (ourIndexes && el !== '') {
        ourIndexes = false;
      }
      if (el === course || ourIndexes && position < arr.length - 3) {
        positions.push(position);
        ourIndexes = true;
      }
    });
    tables.forEach((table, index) => {
      if (table.filter(el => el).length === 0) {
        tables.splice(index, 1);
      }
    });
    return tables.map((table) => {
      return table.filter((el, position) => {
        return positions.indexOf(position) > -1;
      })
    });
  }

}
