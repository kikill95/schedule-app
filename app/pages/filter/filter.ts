import {Page, NavController, NavParams} from 'ionic-angular';
import {TablePage} from '../table/table';


@Page({
  templateUrl: 'build/pages/filter/filter.html'
})
export class FilterPage {
  courses: any;
  constructor(private nav: NavController, private navParams: NavParams) {}

  ngAfterViewInit() {
    this.courses = this.navParams.get('table').table[0].filter((el) => {
      return el.match(/^(M{0,3})(D?C{0,3}|C[DM])(L?X{0,3}|X[LC])(V?I{0,3}|I[VX])+/g)[0].length > 0;
    });
  }

  chooseCourse(course) {
    this.nav.push(TablePage, {table: this.navParams.get('table'), choosenCourse: course});
  }

}
