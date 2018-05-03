import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';
//
import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';
import {Camera, CameraOptions} from '@ionic-native/camera';

/**
 * Generated class for the AddfotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-addfoto',
    templateUrl: 'addfoto.html',
})
export class AddfotoPage {
    UrlImg;
    foto;
    estado="";
    constructor(public navCtrl: NavController, public navParams: NavParams,
        private camera: Camera,
        private transfer: FileTransfer,
        public loadingCtrl: LoadingController,
        public toastCtrl: ToastController) {
        this.foto = this.navParams.get("foto");
    }

    ActivarCAM() {
        let options: CameraOptions = {
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000,
            quality: 100
        }
        this.camera.getPicture(options)
            .then(imageData => {
                this.UrlImg = `data:image/jpeg;base64,${imageData}`;
                this.estado="Imagen a cargar";
            })
            .catch(error => {
                console.error(error);
            });
    }


    BuscarSD() {
        let options: CameraOptions = {
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            targetWidth: 500,
            targetHeight: 500,
            quality: 100
        }
        this.camera.getPicture(options)
            .then(imageData => {
                this.UrlImg = imageData;
                this.estado="Imagen a cargar";
            })
            .catch(error => {
                console.error(error);
                this.presentToast(error);
            });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AddfotoPage');
        this.UrlImg = 'assets/IMG/sinfoto.png';
    }
    respuesta;
    SubirSer() {
        let loader = this.loadingCtrl.create({
            content: "El archivo esta Cargado..."
        });
        loader.present();
        const fileTransfer: FileTransferObject = this.transfer.create();
        var datos = {Cod: this.foto};
        let options: FileUploadOptions = {
            fileKey: 'ionicfile',
            fileName: 'ionicfile',
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {},
            httpMethod: 'POST',
            params: datos
        }

        fileTransfer.upload(this.UrlImg, 'http://www.mirayaprender.com.co/movil/SubirFoto', options)
            .then((data) => {
                //this.respuesta = JSON.stringify(data);
                this.actualizar(data);
                loader.dismiss();
                this.presentToast(data + " Se cargo la imagen al servidor");
            }, (err) => {
                console.log(err);
                loader.dismiss();
                this.presentToast(err);
            });
    }
    infor;
    actualizar(data) {
        if (data.response != "no") {
            this.infor = JSON.stringify(data);
            this.foto = JSON.parse(data.response).sucess;
            this.estado="Vista desde el servidor";
            this.UrlImg = "http://www.mirayaprender.com.co/movil/img/" + JSON.parse(data.response).sucess;
        } else {
            this.presentToast("Error de carga al servidor");
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
