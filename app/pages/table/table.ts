import {Page, NavParams} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/table/table.html'
})
export class TablePage {
  schedule: any;
  time: number;
  constructor(private navParams: NavParams) {}

  ngAfterViewInit() {
    let table = this.navParams.get('table'),
      choosenCourse = this.navParams.get('choosenCourse');
    this.time = table.time;
  }

}
