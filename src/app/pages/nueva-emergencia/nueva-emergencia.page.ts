import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { ServiciobdService } from '../services/serviciobd.service';
import { provideNativeDateAdapter } from '@angular/material/core';
import { AlertasService } from '../services/alertas.service';
import { Pacientes } from '../services/pacientes';
import { EnvioInfoPage } from '../envio-info/envio-info.page';

@Component({
  selector: 'app-nueva-emergencia',
  templateUrl: './nueva-emergencia.page.html',
  styleUrls: ['./nueva-emergencia.page.scss'],
  providers: [provideNativeDateAdapter()],
})
export class NuevaEmergenciaPage implements OnInit {
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
    private baseDatos: ServiciobdService
  ) {}


  ngOnInit() {}


  guardarPaciente() {    
    this.baseDatos.agregarPaciente(this.paciente.nombre, this.paciente.f_nacimiento,this.paciente.idGenero,this.paciente.rut,this.paciente.telefono_contacto)
      .then( (res) => {
        alert("EXITO");
        this.router.navigate(['/envio-info', this.paciente.rut]);
      })
      .catch( (error) => alert(`ERROR ${error}`));
  }
}
