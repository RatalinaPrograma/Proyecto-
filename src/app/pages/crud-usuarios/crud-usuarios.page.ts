import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciobdService } from '../services/serviciobd.service';
import { AlertasService } from '../services/alertas.service';

@Component({
  selector: 'app-crud-usuarios',
  templateUrl: './crud-usuarios.page.html',
  styleUrls: ['./crud-usuarios.page.scss'],
})
export class CrudUsuariosPage implements  OnInit, OnDestroy {
  usuarios: any[] = []; // Arreglo para almacenar los usuarios
  personas: any[] = [];
  private intervalId: any;

  constructor(
    private router: Router,
    private baseDatos: ServiciobdService
  ) { }

  ngOnInit() {
    this.listarPersonas();
    this.startAutoRefresh();
  }

  ngOnDestroy() {
    this.stopAutoRefresh();
  }

  startAutoRefresh() {
    this.intervalId = setInterval(() => {
      this.listarPersonas();
    }, 120000); // Actualiza cada 2 minutos
  }

  stopAutoRefresh() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  listarPersonas() {
    this.baseDatos.listarPersonas()
      .then((res: any[]) => {
        this.personas = res;
        console.log(this.personas); // Depuración
      })
      .catch((error) => {
        console.error(`ERROR ${error}`); // Depuración
        alert(`ERROR ${error}`);
      });
  }

  agregarPersona() {
    this.router.navigate(['/agregar-personas']);
  }

  modificarPersona(idPersona: number) {
    this.router.navigate(['/modificar-usuarios', idPersona]);
  }

  eliminarPersona(idPersona: number) {
    if (confirm('¿Está seguro de que desea eliminar a esta persona?')) {
      this.baseDatos.eliminarPersona(idPersona)
        .then(() => {
          this.listarPersonas();
        })
        .catch((error) => {
          alert(`ERROR ${error}`);
        });
    }
  }
}
