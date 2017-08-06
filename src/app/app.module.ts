import {BrowserModule, platformBrowser} from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
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
import {AdminPageModule} from "../pages/admin/admin.module";
import {AdminPage} from "../pages/admin/admin";
import {Admin_2Page} from "../pages/admin-2/admin-2";
import {Admin_3Page} from "../pages/admin-3/admin-3";
import {ChargesPage} from "../pages/charges/charges";
import {RatesPage} from "../pages/rates/rates";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
      LoginPage,
      SignUpPage,
      WithdrawalPage,
      TransfersPage,
      FixedAccountPage,
      FixedAmountSavingsPage,
      SavingsAccountPage,
      PayWithPaypalPage,
      ChamaAccountsPage,
    WelcomePage,
    AdminPage,
    Admin_2Page,
    Admin_3Page,
      ChargesPage,
      RatesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
      LoginPage,
      SignUpPage,
    WithdrawalPage,
    TransfersPage,
    FixedAccountPage,
    FixedAmountSavingsPage,
    SavingsAccountPage,
    PayWithPaypalPage,
    ChamaAccountsPage,
      WelcomePage,
      AdminPage,
      Admin_2Page,
      Admin_3Page,
    ChargesPage,
    RatesPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
