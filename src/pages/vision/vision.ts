import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RestaPage} from '../resta/resta';
import {MultiPage} from '../multi/multi';
import {DiviPage} from '../divi/divi';
import {AlertController} from 'ionic-angular';

import {ConectarProvider} from '../../providers/conectar/conectar';

/**
 * Generated class for the VisionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-vision',
    templateUrl: 'vision.html',
})
export class VisionPage {

    Result;
    N1;
    N2;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public ConectServ: ConectarProvider,
        private alertCtrl: AlertController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad VisionPage');
    }

    suma() {
        this.Result = "La suma de " + this.N1 + " con " + this.N2 + " es de " + (parseInt(this.N1) + parseInt(this.N2)) + "";
    }


    resta() {
        var parametros = {
            n1: this.N1,
            n2: this.N2
        }
        this.navCtrl.push(RestaPage, parametros);
    }
    multi() {
        var parametros = {
            n1: this.N1,
            n2: this.N2
        }
        this.navCtrl.push(MultiPage, parametros);
    }


    respuesta;
    irDivision() {
        var parametros = {
            n1: this.N1,
            n2: this.N2
        }
        this.respuesta = this.ConectServ.TraerTabla(parametros);
        this.respuesta.subscribe(data => {
            this.respuesta = data;
            this.ProcesarRespuesta();
        }, err => {
            this.presentAlert("Error", "Existe un error con el servidor");
        });
    }

    ProcesarRespuesta() {
        var data = {
            datos: this.respuesta
        }
        this.navCtrl.push(DiviPage, data);
    }

    presentAlert(titulo, Mensaje) {
        let alert = this.alertCtrl.create({
            title: titulo,
            subTitle: Mensaje,
            buttons: ['Aceptar']
        });
        alert.present();
    }

}
