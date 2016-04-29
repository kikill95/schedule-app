import {Page, NavParams} from 'ionic-angular';
import {TableFormatterService} from '../../services/tableFormatter';


@Page({
  templateUrl: 'build/pages/table/table.html',
  providers: [TableFormatterService]
})
export class TablePage {
  schedule: any;
  time: number;
  constructor(private navParams: NavParams, private tabelFormatter: TableFormatterService) {}

  ngAfterViewInit() {
    let data = this.navParams.get('table');
    this.schedule = this.tabelFormatter.performByChosenCourse(data.table, this.navParams.get('choosenCourse'));
    this.time = data.time;
  }

}
