import {Component, OnInit} from '@angular/core';
import {ConsultaCepService} from '../../services/consulta-cep.service';

@Component({
    selector: 'app-consulta-cep',
    templateUrl: './consulta-cep.component.html',
    styleUrls: ['./consulta-cep.component.sass']
})
export class ConsultaCepComponent implements OnInit {

    cep: any = '';
    retorno_cep: any = {};

    loading_cep: boolean = false;
    erro_cep: boolean = false;

    clima: any = {};

    constructor(private consultaService: ConsultaCepService) {
    }

    ngOnInit() {
    }

    consultaCep() {
        this.loading_cep = true;

        this.consultaService.show(this.cep).then((data: any) => {
            let {erro} = data;

            if (erro) {
                this.loading_cep = false;
                this.erro_cep = true;
                this.retorno_cep = {};
            } else {
                this.loading_cep = false;
                this.erro_cep = false;
                this.retorno_cep = data;
            }
        }).catch(error => {
            console.log(error);
        });
    }

    consultaClima(cidade) {
        this.consultaService.showClima(cidade).then((data: any) => {
            let {main, weather} = data;

            let {temp} = main;

            let {description} = weather[0];

            this.clima = {temp, description};

        }).catch(error => {
            console.log(error);
        });
    }
}


