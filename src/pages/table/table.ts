import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TableFormatterService } from '../../services/tableFormatter';
import { StorageService } from '../../services/storage';
import { WelcomePage } from '../welcome/welcome';


@Component({
  templateUrl: 'table.html',
  providers: [TableFormatterService, StorageService]
})
export class TablePage {
  schedule: any;
  dataTime: number;
  day: string;
  today: number = new Date().getDay();
  constructor(
    private nav: NavController,
    private navParams: NavParams,
    private tabelFormatter: TableFormatterService,
    private storage: StorageService) {}

  ngAfterViewInit() {
    let oneDay = this.navParams.get('oneDay');
    this.dataTime = this.storage.getData('lastSyncDate');
    this.day = oneDay[0][1];
    this.schedule = this.tabelFormatter.performByChosenCourse(oneDay, this.navParams.get('choosenCourse'));
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
      setTimeout(() => {
        this.nav.setRoot(WelcomePage);
      }, 200);
    }, 1000);
  }

}
