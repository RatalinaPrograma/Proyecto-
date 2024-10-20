import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Pacientes } from '../services/pacientes';
import { ServiciobdService } from '../services/serviciobd.service';
import { AlertasService } from '../services/alertas.service';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-crud-pacientes',
  templateUrl: './crud-pacientes.page.html',
  styleUrls: ['./crud-pacientes.page.scss'],
})
export class CrudPacientesPage implements OnInit, OnDestroy, ViewWillEnter {
  pacientes: Pacientes[] = [];
  private intervalId: any;
  tieneSignosCreados: boolean = false;

  constructor(
    private router: Router,
    private baseDatos: ServiciobdService
  ) { }

  ngOnInit() {
    this.listarPacientes();
    this.startAutoRefresh();
  }

  ngOnDestroy() {
    this.stopAutoRefresh();
  }

  ionViewWillEnter() {
    this.listarPacientes();
  }

  startAutoRefresh() {
    this.intervalId = setInterval(() => {
      this.listarPacientes();
    }, 120000); // Actualiza cada 2 minutos
  }

  stopAutoRefresh() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  listarPacientes() {
    this.baseDatos.consultartablaPaciente()
      .then((res: Pacientes[]) => {        
        this.pacientes = res;
        console.log(this.pacientes); // Use console.log for debugging
      })
      .catch((error) => {
        console.error(`ERROR ${error}`); // Use console.error for debugging
        alert(`ERROR ${error}`);
      });
  }

  verPacientes() {
    this.router.navigate(['/ver-pacientes']); 
  }

  agregarPacientes() {
    this.router.navigate(['/agregar-pacientes']); 
  }

  eliminarPacientes(rut: string) {
    if (!rut) {
      alert('RUT no válido');
      return;
    }

    if (confirm('¿Está seguro de que desea eliminar a este paciente?')) {
      this.baseDatos.eliminarPaciente(rut)
        .then((res) => {
          this.listarPacientes();
        })
        .catch((error) => { 
          alert(`ERROR ${error}`); 
        });
    }
  }

  modificarPacientes(rut: string) {
    if (!rut) {
      alert('RUT no válido');
      return;
    }

    this.baseDatos.obtenerPaciente(rut)
      .then((paciente) => {
        if (paciente) {
          this.router.navigate(['/modificar-pacientes', rut]);
        } else {
          alert('Paciente no encontrado');
        }
      })
      .catch((error) => {
        alert(`ERROR ${error}`);
      });
  }

  verReporte() {
    this.router.navigate(['/home']); 
  }

  calcularEdad(f_nacimiento: Date) {
    let hoy = new Date();
    let cumpleanos = new Date(f_nacimiento);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    let mes = hoy.getMonth() - cumpleanos.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
    }
    return edad;
  }

  agregarPaciente() {
    this.router.navigate(['/agregar-pacientes']);
  }

  administrarSignosPacientes(rut: string, idSignosVitales?: number) {
    // si tiene signos vitales asignados, se envía a modificar, sino a agregar uno nuevo
    if (idSignosVitales) {
      this.router.navigate(['/modificar-signos-vitales', rut]);
    } else {
      this.router.navigate(['/agregar-signos-vitales', rut]);
    }
  }
}