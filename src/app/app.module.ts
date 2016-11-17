import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { Application } from './app.component';

import { FilterPage } from '../pages/filter/filter';
import { TablePage } from '../pages/table/table';
import { WelcomePage } from '../pages/welcome/welcome';

@NgModule({
  declarations: [
    Application,
    FilterPage,
    TablePage,
    WelcomePage
  ],
  imports: [
    IonicModule.forRoot(Application)
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    Application,
    FilterPage,
    TablePage,
    WelcomePage
  ],
  providers: []
})
export class AppModule {}
