import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {WelcomePage} from './pages/welcome/welcome';


@App({
  template: '<ion-nav [root]="initialPage"></ion-nav>',
  config: {}
})
export class Application {
  initialPage: any = WelcomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}
