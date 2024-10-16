import { Component, OnInit } from '@angular/core';
import { ServiciobdService } from '../services/serviciobd.service';
import { Router } from '@angular/router';
import { Pacientes } from '../services/pacientes';

@Component({
  selector: 'app-eliminar-pacientes',
  templateUrl: './eliminar-pacientes.page.html',
  styleUrls: ['./eliminar-pacientes.page.scss'],
})
export class EliminarPacientesPage implements OnInit {
  paciente: Pacientes ={
    // Variables para almacenar los datos del paciente
    nombre:'',
    f_nacimiento: new Date(), 
    idGenero: 0,
    rut: '',
    telefono_contacto: '',
    };
  constructor( 
    private router: Router,
    private servicebd: ServiciobdService) { }

  ngOnInit() {
  }

  eliminarpaciente(){
    this.servicebd.eliminarPaciente(this.paciente.rut)
      .then( (res) => {
        alert("EXITO");
        this.router.navigate(['/crud-pacientes', this.paciente.rut]);
      })
      .catch( (error) => alert(`ERROR ${error}`));
  }


}
