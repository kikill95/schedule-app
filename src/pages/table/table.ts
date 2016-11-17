import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TableFormatterService } from '../../services/tableFormatter';
import { WelcomePage } from '../welcome/welcome';


@Component({
  templateUrl: 'table.html',
  providers: [TableFormatterService]
})
export class TablePage {
  schedule: any;
  dataTime: number;
  day: string;
  today: number = new Date().getDay();
  constructor(private nav: NavController, private navParams: NavParams, private tabelFormatter: TableFormatterService) {}

  ngAfterViewInit() {
    let data = this.navParams.get('table');
    this.dataTime = data.time;
    this.day = data.table[0][0];
    this.schedule = this.tabelFormatter.performByChosenCourse(data.table, this.navParams.get('choosenCourse'));
  }

  getPreviousNotEmpty(rows, j) {
    if (j > 1 && rows[j - 1] === '') {
      return this.getPreviousNotEmpty(rows, j - 1);
    }
    return rows[j - 1];
  }

  changeFilter() {
    this.nav.pop();
  }

  refresh(refresher) {
    setTimeout(() => {
      refresher.complete();
      this.nav.setRoot(WelcomePage);
    }, 2000);
  }

}
