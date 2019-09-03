import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConsultaCepComponent} from './pages/consulta-cep/consulta-cep.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultaCepComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
