import { Component, OnInit } from '@angular/core';
import { ServiciobdService } from '../services/serviciobd.service';
import { Pacientes } from '../services/pacientes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-pacientes',
  templateUrl: './agregar-pacientes.page.html',
  styleUrls: ['./agregar-pacientes.page.scss'],
})
export class AgregarPacientesPage implements OnInit {
  paciente: Pacientes = {
    nombre: '',
    f_nacimiento: new Date(),
    idGenero: 0,
    rut: '',
    telefono_contacto: '',
  };

  constructor(
    private router: Router,
    private baseDatos: ServiciobdService
  ) {}

  ngOnInit() {
    // Aquí puedes hacer inicializaciones si es necesario.
  }

  // Validación del formulario
  private validarFormulario(): boolean {
    if (!this.paciente.nombre || !this.paciente.rut) {
      alert('Por favor, completa los campos obligatorios.');
      return false;
    }
    return true;
  }

  // Guardar paciente en la base de datos
  guardarPaciente() {
    if (!this.validarFormulario()) {
      return;  // Si la validación falla, no continuamos
    }

    this.baseDatos.agregarPaciente(
      this.paciente.nombre,
      this.paciente.f_nacimiento,
      this.paciente.idGenero,
      this.paciente.rut,
      this.paciente.telefono_contacto
    )
    .then((res) => {
      alert('Paciente agregado con éxito');
      console.log('Respuesta:', res);
      this.router.navigate(['/crud-pacientes', this.paciente.rut]);
    })
    .catch((error) => {
      console.error('Error:', error);
      alert(`Error al agregar al paciente: ${error.message}`);
    });
  }
}
