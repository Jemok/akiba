import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavingsAccountPage } from './savings-account';

@NgModule({
  declarations: [
    SavingsAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(SavingsAccountPage),
  ],
})
export class SavingsAccountPageModule {}
