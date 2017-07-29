///<reference path="../home/home.ts"/>
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SignUpPage} from "../sign-up/sign-up";
import {HomePage} from "../home/home";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToSignUp(){
    this.navCtrl.push(SignUpPage,{})
  }
  goToHome(){
    this.navCtrl.push(HomePage,{})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
