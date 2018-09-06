import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Mi aplicacion de angular';
  urlImagen = "https://angular.io/generated/images/guide/architecture/databinding.png";

  tarjetas = [
    { nombre: 'angular'},
    { nombre: 'react'},
    { nombre: 'vue'},
    { nombre: 'polymer'}
    ];

  mostarAlerta() {
    console.log('alerta');
  }
}
