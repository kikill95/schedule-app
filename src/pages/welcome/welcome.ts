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
  private table: any;

  constructor(
    private schedule: ScheduleService,
    private nav: NavController,
    public alertCtrl: AlertController) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.schedule.getTable().subscribe((data: any) => {
        this.table = data.table;
        this.nextStep();
      });
    }, 1000);
  }

  nextStep() {
    if (!this.table) {
      this.alertCtrl.create({
        title: 'Немає з’єднання!',
        subTitle: 'Будь ласка, підключіться до інтернету',
        buttons: [{
          text: 'Повторити спробу',
          handler: data => {
            this.ngAfterViewInit();
          }
        }]
      }).present();
    } else {
      this.nav.push(FilterPage, {table: this.table});
    }
  }

}
