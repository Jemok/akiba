import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {LoginPage} from "../pages/login/login";
import {WithdrawalPage} from "../pages/withdrawal/withdrawal";
import {TransfersPage} from "../pages/transfers/transfers";
import {FixedAccountPage} from "../pages/fixed-account/fixed-account";
import {SavingsAccountPage} from "../pages/savings-account/savings-account";
import {FixedAmountSavingsPage} from "../pages/fixed-amount-savings/fixed-amount-savings";
import {WelcomePage} from "../pages/welcome/welcome";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
       {title:'Withdrawal', component: WithdrawalPage},
      {title:'Transfers', component: TransfersPage},
      {title:'Fixed Account', component: FixedAccountPage},
      {title:'Savings Account', component: SavingsAccountPage},
      {title:'Fixed Amount', component: FixedAmountSavingsPage},
      {title:'Withdrawal', component: WithdrawalPage},
      {title: 'Logout', component:LoginPage}

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
