import { Component, OnInit } from '@angular/core';
import { MineriaService, Produccion } from '../../services/mineria.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar',
  imports: [MatTableModule, CommonModule],
  templateUrl: './listar.component.html'
})
export class ListarComponent implements OnInit {
  columnas: string[] = ['id', 'mineral', 'cantidad', 'ubicacion'];
  dataSource = new MatTableDataSource<Produccion>([]);

  constructor(private mineriaService: MineriaService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.mineriaService.obtenerProduccion().subscribe(res => {
      console.log(res);
      this.dataSource.data = res;
      this.cdr.detectChanges();
    });
  }
}
