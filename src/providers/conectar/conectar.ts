import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the ConectarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConectarProvider {

    constructor(public http: HttpClient) {
        console.log('Hello ConectarProvider Provider');
    }

    url = 'http://www.mirayaprender.com.co/movil/';

    options = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    TraerTabla(dataJSON) {
        var url = this.url + 'generarTabla';
        return this.http.post(url, JSON.stringify(dataJSON), this.options);
    }

    GuardarProducto(dataJSON) {
        console.log(JSON.stringify(dataJSON));
        var url = this.url + 'ADDProducto';
        return this.http.post(url, JSON.stringify(dataJSON), this.options);
    }

    TraerLista(dataJSON) {
        var url = this.url + 'LisProXCat';
        return this.http.post(url, JSON.stringify(dataJSON), this.options);
    }

}
