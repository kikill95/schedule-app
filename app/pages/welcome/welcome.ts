import {Page} from 'ionic-angular';
import {ScheduleService} from '../../services/schedule';
import {StorageService} from '../../services/storage';


@Page({
  templateUrl: 'build/pages/welcome/welcome.html',
  providers: [ScheduleService, StorageService]
})
export class WelcomePage {
  table: any;

  constructor(private schedule: ScheduleService) {}

  ngAfterViewInit() {
    let timer: any = setTimeout(() => {
        if (this.table) {
          // go away
        }
    }, 4000);
    this.schedule.getTable().subscribe(data => {
        this.table = data;
        if (timer.runCount !== 0) {
          // go away
        }
    });
  }

}
