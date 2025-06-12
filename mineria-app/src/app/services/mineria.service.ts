import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Produccion {
  id?: number;
  mineral: string;
  cantidad: number;
  ubicacion: string;
}

@Injectable({ providedIn: 'root' })
export class MineriaService {
  // private apiUrl = 'http://localhost:3000/produccion';
  private apiUrl = 'https://fuzzy-space-acorn-r4r4wwxxp5pjcgxw-3000.app.github.dev/produccion'

  constructor(private http: HttpClient) {}

  obtenerProduccion(): Observable<Produccion[]> {
    return this.http.get<Produccion[]>(this.apiUrl);
  }

  registrarProduccion(produccion: Produccion): Observable<Produccion> {
    return this.http.post<Produccion>(this.apiUrl, produccion);
  }
}
