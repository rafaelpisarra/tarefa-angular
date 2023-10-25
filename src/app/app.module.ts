import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headercomponent } from "./component/header/header.component";
import { componentModule } from './component/componet.module';
import { FormsModule } from '@angular/forms';
import { ClienteModule } from './pages/cliente/cliente.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    componentModule,
    AppRoutingModule,
    FormsModule,
    ClienteModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
