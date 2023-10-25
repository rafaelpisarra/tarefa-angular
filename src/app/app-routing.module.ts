import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { clientepage } from './pages/cliente/cliente-page.component';

const routes: Routes = [
   {path: 'cliente', component: clientepage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
