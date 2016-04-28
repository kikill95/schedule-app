import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {WelcomePage} from './pages/welcome/welcome';


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {}
})
export class Schedule {
  rootPage: any = WelcomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}
