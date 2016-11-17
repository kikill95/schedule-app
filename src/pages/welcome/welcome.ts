import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ScheduleService } from '../../services/schedule';
import { StorageService } from '../../services/storage';
import { FilterPage } from '../../pages/filter/filter';


@Component({
  templateUrl: 'welcome.html',
  providers: [ScheduleService, StorageService]
})
export class WelcomePage {
  table: any;

  constructor(
    private schedule: ScheduleService,
    private nav: NavController,
    public alertCtrl: AlertController) {}

  ngAfterViewInit() {
    let timer: any = setTimeout(() => {
      if (this.table) {
        this.nextStep();
      }
    }, 5000);
    this.schedule.getTable().subscribe(data => {
      this.table = data;
      if (timer.runCount !== 0) {
        this.nextStep();
      }
    });
  }

  nextStep() {
    if (!this.table.time) {
      let alert = this.alertCtrl.create({
        title: 'Немає з’єднання!',
        subTitle: 'Будь ласка, підключіться до інтернету',
        buttons: [{
          text: 'Повторити спробу',
          handler: data => {
            this.ngAfterViewInit();
          }
        }]
      });
      alert.present();
    } else {
      this.nav.push(FilterPage, {table: this.table});
    }
  }

}
