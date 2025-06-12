import { Component, OnInit } from '@angular/core';
import { MineriaService, Produccion } from '../../services/mineria.service';
import { MatTableModule } from '@angular/material/table';
import './listar.component.css';
@Component({
  selector: 'app-listar',
  imports: [MatTableModule],
  templateUrl: './listar.component.html'
})
export class ListarComponent implements OnInit {
columnas: string[] = ['id', 'mineral', 'cantidad', 'ubicacion'];
datos: Produccion[] = [];
constructor(private mineriaService: MineriaService) {}
//constructor() {}
ngOnInit() {
  console.log("listar...");
  this.mineriaService.obtenerProduccion().subscribe(res => this.datos = res);
  }
}
