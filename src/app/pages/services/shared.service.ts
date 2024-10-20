import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  idUsuario: number = 0;

  constructor() { }

  getIdUsuario(): number {
    return this.idUsuario;
  }

  setIdUsuario(idUsuario: number) {
    this.idUsuario = idUsuario;
  }
}
