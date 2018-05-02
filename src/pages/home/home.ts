import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MisionPage} from '../mision/mision';
import {VisionPage} from '../vision/vision';
import {AddprodPage} from '../addprod/addprod';
import {ListprodPage} from '../listprod/listprod';
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
    
    irServicios(){
        this.navCtrl.push(AddprodPage)
    }
    irFotos(){
        this.navCtrl.push(ListprodPage)
    }


}
