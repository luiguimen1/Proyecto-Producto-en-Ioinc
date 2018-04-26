import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import {ConectarProvider} from '../providers/conectar/conectar';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        MisionPage,
        VisionPage,
        RestaPage,
        MultiPage,
        DiviPage
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
        DiviPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ConectarProvider
    ]
})
export class AppModule {}
