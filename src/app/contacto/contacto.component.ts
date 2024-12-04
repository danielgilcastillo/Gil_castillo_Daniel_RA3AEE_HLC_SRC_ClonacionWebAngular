import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.sass']
})
export class ContactoComponent {
  mostrarMapa: boolean = true;

  ocultarMostrar(){
    this.mostrarMapa = !this.mostrarMapa;
  }

}
