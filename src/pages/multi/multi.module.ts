import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MultiPage } from './multi';

@NgModule({
  declarations: [
    MultiPage,
  ],
  imports: [
    IonicPageModule.forChild(MultiPage),
  ],
})
export class MultiPageModule {}
