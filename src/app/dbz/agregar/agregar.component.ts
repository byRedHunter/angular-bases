import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {}

  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim() === '') {
      this.toastr.warning('El nombre es requerido', 'Advertencia', {
        timeOut: 3000,
      });
    } else {
      this.onNuevoPersonaje.emit(this.nuevo);

      this.nuevo = {
        nombre: '',
        poder: 0,
      };
    }
  }
}
