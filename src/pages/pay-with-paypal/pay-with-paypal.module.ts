import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PayWithPaypalPage } from './pay-with-paypal';

@NgModule({
  declarations: [
    PayWithPaypalPage,
  ],
  imports: [
    IonicPageModule.forChild(PayWithPaypalPage),
  ],
})
export class PayWithPaypalPageModule {}
