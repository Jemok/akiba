import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToHome(){
    this.navCtrl.push(HomePage, {})

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

}
