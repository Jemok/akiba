import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChamaAccountsPage } from './chama-accounts';

@NgModule({
  declarations: [
    ChamaAccountsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChamaAccountsPage),
  ],
})
export class ChamaAccountsPageModule {}
