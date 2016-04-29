import {Page, NavParams} from 'ionic-angular';
import {TableFormatterService} from '../../services/tableFormatter';


@Page({
  templateUrl: 'build/pages/table/table.html',
  providers: [TableFormatterService]
})
export class TablePage {
  schedule: any;
  dataTime: number;
  day: string;
  constructor(private navParams: NavParams, private tabelFormatter: TableFormatterService) {}

  ngAfterViewInit() {
    let data = this.navParams.get('table');
    this.dataTime = data.time;
    this.day = data.table[0][0];
    this.schedule = this.tabelFormatter.performByChosenCourse(data.table, this.navParams.get('choosenCourse'));
  }

}
