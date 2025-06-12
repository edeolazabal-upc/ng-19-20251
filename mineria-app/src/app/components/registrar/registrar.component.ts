import { Component } from '@angular/core';
import { MineriaService, Produccion } from '../../services/mineria.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import './registrar.component.css';

@Component({
  selector: 'app-registrar',
 // standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './registrar.component.html'
})
export class RegistrarComponent {
  produccion: Produccion = { mineral: '', cantidad: 0, ubicacion: '' };

  constructor(private mineriaService: MineriaService) {}

  registrar() {
    this.mineriaService.registrarProduccion(this.produccion).subscribe(() => {
      alert('Registro exitoso');
      this.produccion = { mineral: '', cantidad: 0, ubicacion: '' };
    });
  }
}
