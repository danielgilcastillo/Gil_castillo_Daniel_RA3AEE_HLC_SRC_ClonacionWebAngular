import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Datos2Service } from './datos2.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'WebClonadaAngular';
  mostrarAreas: boolean = true;

  areas: any[] = [];

 
  constructor(private datos2Service : Datos2Service) { }

  ngOnInit() {
 //   this.datos2Service.obtenerDatos().subscribe((data: { areas: any[]; }) => {
 //     this.areas = data.areas;
//   });

  }




}
