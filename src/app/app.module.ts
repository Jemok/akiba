///<reference path="../pages/sign-up/sign-up.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {SignUpPage} from "../pages/sign-up/sign-up";
import {WithdrawalPage} from "../pages/withdrawal/withdrawal";
import {TransfersPage} from "../pages/transfers/transfers";
import {FixedAccountPage} from "../pages/fixed-account/fixed-account";
import {FixedAmountSavingsPage} from "../pages/fixed-amount-savings/fixed-amount-savings";
import {SavingsAccountPage} from "../pages/savings-account/savings-account";
import {PayWithPaypalPage} from "../pages/pay-with-paypal/pay-with-paypal";
import {ChamaAccountsPage} from "../pages/chama-accounts/chama-accounts";
import {WelcomePage} from "../pages/welcome/welcome";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
      LoginPage,
      SignUpPage,
      WithdrawalPage,
      TransfersPage,
      FixedAccountPage,
      FixedAmountSavingsPage,
      SavingsAccountPage,
      PayWithPaypalPage,
      ChamaAccountsPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
      LoginPage,
      SignUpPage,
    WithdrawalPage,
    TransfersPage,
    FixedAccountPage,
    FixedAmountSavingsPage,
    SavingsAccountPage,
    PayWithPaypalPage,
    ChamaAccountsPage,
      WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
