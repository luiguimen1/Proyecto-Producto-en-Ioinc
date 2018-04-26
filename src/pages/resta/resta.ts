import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RestaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resta',
  templateUrl: 'resta.html',
})
export class RestaPage {

  Elnumero1;
  Elnumero2;
  Resultado;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.Elnumero1 = navParams.get("n1");
      this.Elnumero2 = navParams.get("n2");
  }

  ionViewDidLoad() {
      this.Resultado = this.Elnumero1 - this.Elnumero2;
  }

}
