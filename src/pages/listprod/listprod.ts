import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ConectarProvider} from '../../providers/conectar/conectar';
import {ToastController} from 'ionic-angular';
/**
 * Generated class for the ListprodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-listprod',
    templateUrl: 'listprod.html',
})
export class ListprodPage {

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public ConectServ: ConectarProvider,
        public toastCtrl: ToastController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ListprodPage');
    }

    cat;
    respuesta;
    edificio;
    listar() {
        let cat = {cat: this.cat};
        this.respuesta = this.ConectServ.TraerLista(cat);

        this.respuesta.subscribe(data => {
            this.procesarView(data);
        }, err => {
            console.log(JSON.stringify(err));
        });
    }

    procesarView(pValor) {
        if (pValor.length == 0) {
            this.presentToast("No hay Valores");
        } else {
            this.edificio = pValor;
        }
    }

    presentToast(msg) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });
        toast.present();
    }

}
