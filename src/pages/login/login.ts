import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToHome(){
    this.navCtrl.push(HomePage,{})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
