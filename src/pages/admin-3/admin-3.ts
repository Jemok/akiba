import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChargesPage} from "../charges/charges";
import {RatesPage} from "../rates/rates";

/**
 * Generated class for the Admin_3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-3',
  templateUrl: 'admin-3.html',
})
export class Admin_3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToCharges(){
    this.navCtrl.push(ChargesPage, {})
  }
  goToViewRates(){
    this.navCtrl.push(RatesPage, {})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Admin_3Page');
  }

}
