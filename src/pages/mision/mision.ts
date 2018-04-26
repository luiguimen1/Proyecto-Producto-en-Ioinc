import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {VisionPage} from '../vision/vision';

/**
 * Generated class for the MisionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mision',
  templateUrl: 'mision.html',
})
export class MisionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisionPage');
  }
  
  irVsion(){
      this.navCtrl.push(VisionPage);
  }

}
