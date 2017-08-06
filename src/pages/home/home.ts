import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {FixedAccountPage} from "../fixed-account/fixed-account";
import {SavingsAccountPage} from "../savings-account/savings-account";
import {FixedAmountSavingsPage} from "../fixed-amount-savings/fixed-amount-savings";
import {ChamaAccountsPage} from "../chama-accounts/chama-accounts";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }

  goToFixedAccount(){
    this.navCtrl.push(FixedAccountPage,{})
  }
  goToSavingsAccount(){
    this.navCtrl.push(SavingsAccountPage,{})
  }
  goToFixedAmounttSavings(){
    this.navCtrl.push(FixedAmountSavingsPage,{})
  }
  goToChameAccount(){
    this.navCtrl.push(ChamaAccountsPage,{})
  }
  goBack(){
    this.navCtrl.push(LoginPage)
  }
}
