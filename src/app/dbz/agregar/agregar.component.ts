import { Component, Input, OnInit } from '@angular/core';
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

  @Input() personajes: Personaje[] = [];

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  agregar() {
    if (this.nuevo.nombre.trim() === '') {
      this.toastr.warning('El nombre es requerido', 'Advertencia', {
        timeOut: 3000,
      });
    } else {
      this.savePersonaje();
    }
  }

  savePersonaje() {
    this.personajes.push(this.nuevo);
    localStorage.setItem('personajes', JSON.stringify(this.personajes));
    this.toastr.success('Personaje guardado', 'Genial!!', {
      timeOut: 3000,
    });
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
