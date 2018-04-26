import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MultiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-multi',
  templateUrl: 'multi.html',
})
export class MultiPage {
    
    edificio = [];
    Elnumero1;
    Elnumero2;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.Elnumero1 = navParams.get("n1");
      this.Elnumero2 = navParams.get("n2");
  }
  
  cargarEdificio(){
      for (let i = 1; i <= this.Elnumero2;i++){
          let tmp={
              n1: this.Elnumero1,
              n2: i,
              resul: (this.Elnumero1*i)
          }
          this.edificio[i-1]=tmp;
      }
  }

  ionViewDidLoad() {
    this.cargarEdificio();
  }

}
