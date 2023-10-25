import { NgModule } from '@angular/core';
import { clientepage } from './cliente-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule, Routes } from '@angular/router';
import { clienteVisualizacaoPage } from './cliente-page-visualizacao.component';

const routes: Routes = [
    {
      path: 'cliente', 
      children: [ 
        { path: 'visualizacao' , component: clienteVisualizacaoPage }
       ]
    }
 ];

@NgModule({
  declarations: [
    clientepage,
    clienteVisualizacaoPage
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: []
})
export class ClienteModule {
    
}
