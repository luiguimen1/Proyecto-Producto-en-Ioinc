import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddfotoPage} from '../addfoto/addfoto';

import {ConectarProvider} from '../../providers/conectar/conectar';

/**
 * Generated class for the AddprodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addprod',
  templateUrl: 'addprod.html',
})
export class AddprodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public ConectServ: ConectarProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddprodPage');
  }
  nom;
  pre;
  can;
  des;
  cat;
  
  respuesta;
  CreaProdu(){
      let producto={
          cat:this.cat,
          nom:this.nom,
          pre:this.pre,
          can:this.can,
          des:this.des
      }
      this.respuesta = this.ConectServ.GuardarProducto(producto);
      
      this.respuesta.subscribe(data => {
            this.respuesta = data;
            if(this.respuesta.success=="ok"){
                this.navCtrl.push(AddfotoPage,{foto:this.respuesta.foto})
            }else{
                
            }
        }, err => {
            console.log(JSON.stringify(err));
        });
      
      
      
      
      
      
    //  ;
  }

}
