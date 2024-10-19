import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapaService {
  private apiUrl = 'https://mapa-1.onrender.com/api/mapa'; // URL de tu API

  constructor(private http: HttpClient) {}

  obtenerMarcadores(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
