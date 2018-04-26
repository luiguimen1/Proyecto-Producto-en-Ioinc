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

    url = 'http://192.168.0.225:8081/web2/';

    options = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };


    TraerTabla(dataJSON) {
        var url = this.url + 'generarTabla';
        console.log(url);
        console.log(JSON.stringify(dataJSON));
        return this.http.post(url, JSON.stringify(dataJSON), this.options);
    }

}
