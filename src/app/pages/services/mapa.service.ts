import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MapaService {
  constructor(private http: HttpClient) {}

  obtenerCoordenadas() {
    // Aquí puedes usar una API para obtener coordenadas si es necesario
    return this.http.get('https://mapa-1.onrender.com/api/mapa');
  }
}
