import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CabeceraComponent  } from './cabecera/cabecera.component';
import { AreastrabajoComponent} from './areastrabajo/areastrabajo.component';
import { ContactoComponent  } from './contacto/contacto.component';
import { InicioComponent  } from './inicio/inicio.component';
import { PiedepaginaComponent  } from './piedepagina/piedepagina.component';
import { ServiciosComponent  } from './servicios/servicios.component';
import { ServiciodetalleComponent  } from './serviciodetalle/serviciodetalle.component';






const routes: Routes = [
  { path: 'contacto' , component: ContactoComponent},
  { path: 'inicio' , component: InicioComponent},
  { path: 'servicios' , component: ServiciosComponent},
  { path: 'serviciodetalle' , component: ServiciodetalleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
