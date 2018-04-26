import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the DiviPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-divi',
    templateUrl: 'divi.html',
})
export class DiviPage {
    edificio;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.edificio = navParams.get("datos");
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DiviPage');
        console.log(this.edificio);
    }

}
