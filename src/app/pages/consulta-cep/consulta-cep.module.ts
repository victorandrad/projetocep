import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConsultaCepComponent} from './consulta-cep.component';
import {ConsultaCepService} from '../../services/consulta-cep.service';

@NgModule({
    declarations: [
        ConsultaCepComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        ConsultaCepService
    ]
})
export class ConsultaCepModule {
}
