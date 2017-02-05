import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TablePage } from '../table/table';


@Component({
  templateUrl: 'filter.html'
})
export class FilterPage {
  table: any;
  today: number = new Date().getDay();
  constructor(private nav: NavController, private navParams: NavParams) {}

  ngAfterViewInit() {
    this.table = this.navParams.get('table').filter(el => el).map(el => el.filter(el => el));
  }

  public isRelevantHeader(value: string): boolean {
    return value && value.match(/^(M{0,3})(D?C{0,3}|C[DM])(L?X{0,3}|X[LC])(V?I{0,3}|I[VX])(І{0,3})+/g)[0].length > 0;
  }

  chooseCourse(index, course) {
    this.nav.push(TablePage, {oneDay: this.table[index], choosenCourse: course});
  }

}
