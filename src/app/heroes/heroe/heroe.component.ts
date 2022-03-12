import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  title: string = 'Heroe App';

  nombre: string = 'byRedHunter';
  edad: number = 22;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void {
    this.nombre = 'Blizzard';
  }

  cambiarEdad(): void {
    this.edad = 26;
  }
}
