import {Page, NavController} from 'ionic-angular';
import {ScheduleService} from '../../services/schedule';
import {StorageService} from '../../services/storage';
import {FilterPage} from '../../pages/filter/filter';


@Page({
  templateUrl: 'build/pages/welcome/welcome.html',
  providers: [ScheduleService, StorageService]
})
export class WelcomePage {
  table: any;

  constructor(private schedule: ScheduleService, private nav: NavController) {}

  ngAfterViewInit() {
    var nextStep = () => {
      this.nav.push(FilterPage, {table: this.table});
    }
    let timer: any = setTimeout(() => {
        if (this.table) {
          nextStep();
        }
    }, 4000);
    this.schedule.getTable().subscribe(data => {
        this.table = data;
        if (timer.runCount !== 0) {
          nextStep();
        }
    });
  }

}
