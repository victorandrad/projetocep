import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ConsultaCepService {

    constructor(private http: HttpClient) {
    }

    show(cep) {
        return new Promise((resolve, reject) => {
            this.http.get(`https://viacep.com.br/ws/${cep}/json/`).subscribe(data => {
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }

    showClima(cidade) {
        return new Promise((resolve, reject) => {
            this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cidade},Br&lang=pt&APPID=b4dccd9aa089b3046395d47721e9eddd`).subscribe(data => {
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }

}
