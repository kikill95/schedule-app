import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TablePage } from '../table/table';


@Component({
  templateUrl: 'filter.html'
})
export class FilterPage {
  courses: any;
  today: number = new Date().getDay();
  constructor(private nav: NavController, private navParams: NavParams) {}

  ngAfterViewInit() {
    this.courses = this.navParams.get('table').table[0].filter((el) => {
      return el.match(/^(M{0,3})(D?C{0,3}|C[DM])(L?X{0,3}|X[LC])(V?I{0,3}|I[VX])(І{0,3})+/g)[0].length > 0;
    });
  }

  chooseCourse(course) {
    this.nav.push(TablePage, {table: this.navParams.get('table'), choosenCourse: course});
  }

}
