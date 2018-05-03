import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {MisionPage} from '../pages/mision/mision';
import {VisionPage} from '../pages/vision/vision';
import {RestaPage} from '../pages/resta/resta';
import {MultiPage} from '../pages/multi/multi';
import {DiviPage} from '../pages/divi/divi';
import {ViewprodPage} from '../pages/viewprod/viewprod';


import {AddfotoPage} from '../pages/addfoto/addfoto';
import {AddprodPage} from '../pages/addprod/addprod';
import {ListprodPage} from '../pages/listprod/listprod';


import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file';
import {Camera} from '@ionic-native/camera';

import {ConectarProvider} from '../providers/conectar/conectar';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        MisionPage,
        VisionPage,
        RestaPage,
        MultiPage,
        DiviPage,
        AddfotoPage,
        AddprodPage,
        ListprodPage,
        ViewprodPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        MisionPage,
        VisionPage,
        RestaPage,
        MultiPage,
        DiviPage,
        AddfotoPage,
        AddprodPage,
        ListprodPage,
        ViewprodPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ConectarProvider,
        FileTransfer,
       // FileUploadOptions,
       // FileTransferObject,
        File,
        Camera
    ]
})

export class AppModule {}
