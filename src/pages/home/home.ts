import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MisionPage} from '../mision/mision';
import {VisionPage} from '../vision/vision';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

    }

    irMision() {
        this.navCtrl.push(MisionPage);
    }
    irVision() {
        this.navCtrl.push(VisionPage);
    }


}
