import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  constructor() {
    this.getPersonajes();
  }

  personajes: Personaje[] = [];
  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  getPersonajes(): void {
    const storage = localStorage.getItem('personajes');
    storage ? (this.personajes = JSON.parse(storage)) : (this.personajes = []);
  }
}
