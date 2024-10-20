import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  idUsuario: number = 0;
  idRolUsuario: number = 2;

  constructor() { }

  getIdUsuario(): number {
    return this.idUsuario;
  }

  setIdUsuario(idUsuario: number) {
    this.idUsuario = idUsuario;
  }

  getidRolUsuario(): number {
    return this.idRolUsuario;
  }

  setidRolUsuario(idRolUsuario: number) {
    this.idRolUsuario = idRolUsuario;
  }
}
