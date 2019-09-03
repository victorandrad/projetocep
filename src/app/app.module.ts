import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConsultaCepComponent} from './pages/consulta-cep/consulta-cep.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {IConfig, NgxMaskModule} from 'ngx-mask';

// @ts-ignore
export const options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
    declarations: [
        AppComponent,
        ConsultaCepComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        NgxMaskModule.forRoot(options)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
