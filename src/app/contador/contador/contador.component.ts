import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>

    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>

    <button class="danger" (click)="acumulate(-base)">Quitar</button>
    <span class="dd mr-8">{{ counter }}</span>
    <button (click)="acumulate(base)">Agregar</button>
  `,
})
export class ContadorComponent {
  title: string = 'Contador App';
  base: number = 5;
  counter: number = 10;

  acumulate(value: number = 1): void {
    this.counter += value;
  }
}
