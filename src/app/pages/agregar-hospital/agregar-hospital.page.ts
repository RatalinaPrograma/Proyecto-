import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciobdService } from '../services/serviciobd.service';

@Component({
  selector: 'app-agregar-hospital',
  templateUrl: './agregar-hospital.page.html',
  styleUrls: ['./agregar-hospital.page.scss'],
})
export class AgregarHospitalPage implements OnInit {
  hospital = {
    nombre: '',
    direccion: '',
  };

  constructor(
    private router: Router, 
    private baseDatos: ServiciobdService
  ) {}

  ngOnInit() {
    // Inicialización si es necesario
  }

  private validarFormulario(): boolean {
    if (!this.hospital.nombre || !this.hospital.direccion) {
      alert('Por favor, completa los campos obligatorios.');
      return false;
    }
    return true;
  }

  guardarHospital() {
    if (!this.validarFormulario()) {
      return; // Detiene la ejecución si la validación falla
    }

    this.baseDatos.agregarHospital(
      this.hospital.nombre,
      this.hospital.direccion
    )
    .then(() => {
      alert('Hospital agregado con éxito');
      this.irACrudHospital(); // Navegar al CRUD de hospitales después de agregar
    })
    .catch((error) => {
      alert(`Error al agregar el hospital: ${error.message}`);
    });
  }

  // Método público para navegar al CRUD de hospitales
  irACrudHospital() {
    this.router.navigate(['/crud-hospital']);
  }
}
