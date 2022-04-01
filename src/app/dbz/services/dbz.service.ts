import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [];

  constructor(private toastr: ToastrService) {
    console.log('BbzService init...');
    this.getPersonajes();
  }

  get personajes() {
    return [...this._personajes];
  }

  private getPersonajes(): void {
    const storage = localStorage.getItem('personajes');
    storage
      ? (this._personajes = JSON.parse(storage))
      : (this._personajes = []);
  }

  savePersonaje(data: Personaje) {
    this._personajes.push(data);

    localStorage.setItem('personajes', JSON.stringify(this._personajes));

    this.toastr.success('Personaje guardado', 'Genial!!', {
      timeOut: 3000,
    });
  }

  deletePersonaje(index: number) {
    this._personajes.splice(index, 1);

    localStorage.setItem('personajes', JSON.stringify(this._personajes));

    this.toastr.success('Personaje eliminado', 'Genial!!', {
      timeOut: 3000,
    });
  }
}
