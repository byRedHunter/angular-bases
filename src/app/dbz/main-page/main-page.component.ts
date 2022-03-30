import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  constructor(private toastr: ToastrService) {
    this.getPersonajes();
  }

  personajes: Personaje[] = [];

  getPersonajes(): void {
    const storage = localStorage.getItem('personajes');
    storage ? (this.personajes = JSON.parse(storage)) : (this.personajes = []);
  }

  savePersonaje(data: Personaje) {
    this.personajes.push(data);

    localStorage.setItem('personajes', JSON.stringify(this.personajes));

    this.toastr.success('Personaje guardado', 'Genial!!', {
      timeOut: 3000,
    });
  }
}
