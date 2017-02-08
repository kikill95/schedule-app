import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Splashscreen } from 'ionic-native';

import { WelcomePage } from '../pages/welcome/welcome';

@Component({
  template: '<ion-nav [root]="initialPage"></ion-nav>'
})
export class Application {
  initialPage: any = WelcomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
      platform.registerBackButtonAction((event) => {
          event.preventDefault();
      });
    });
  }
}
