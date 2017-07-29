import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SignUpPage} from "../sign-up/sign-up";
import {LoginPage} from "../login/login";

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToLogin(){
    this.navCtrl.push(LoginPage,{})
  }
  goToSignUp(){
    this.navCtrl.push(SignUpPage,{})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
