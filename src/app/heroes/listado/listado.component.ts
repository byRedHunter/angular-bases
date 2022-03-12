import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['byRedHunter', 'Blizzard', 'Hit', 'Crown'];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.pop() || '';
    console.log(`${this.heroeBorrado} fue borrado de la lista`);
  }
}
