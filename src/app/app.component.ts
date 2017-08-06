import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {WithdrawalPage} from "../pages/withdrawal/withdrawal";
import {TransfersPage} from "../pages/transfers/transfers";
import {FixedAccountPage} from "../pages/fixed-account/fixed-account";
import {SavingsAccountPage} from "../pages/savings-account/savings-account";
import {FixedAmountSavingsPage} from "../pages/fixed-amount-savings/fixed-amount-savings";
import {WelcomePage} from "../pages/welcome/welcome";
import {ChamaAccountsPage} from "../pages/chama-accounts/chama-accounts";
import {PayWithPaypalPage} from "../pages/pay-with-paypal/pay-with-paypal";
import {AdminPage} from "../pages/admin/admin";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = AdminPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
       {title:'Withdrawal', component: WithdrawalPage},
      {title:'Transfers', component: TransfersPage},
      {title:'Fixed Account', component: FixedAccountPage},
      {title:'Savings Account', component: SavingsAccountPage},
      {title:'Fixed Amount Savings', component: FixedAmountSavingsPage},
      {title:'Chama Accounts', component: ChamaAccountsPage},
      {title:'Pay with PayPal', component: PayWithPaypalPage },
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
