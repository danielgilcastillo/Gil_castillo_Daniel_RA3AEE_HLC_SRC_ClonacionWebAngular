import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PiedepaginaComponent } from './piedepagina/piedepagina.component';
import { AreastrabajoComponent } from './areastrabajo/areastrabajo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { Datos2Service } from './datos2.service';
import { ServiciodetalleComponent } from './serviciodetalle/serviciodetalle.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PiedepaginaComponent,
    AreastrabajoComponent,
    ContactoComponent,
    InicioComponent,
    ServiciosComponent,
    ServiciodetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 


 }
