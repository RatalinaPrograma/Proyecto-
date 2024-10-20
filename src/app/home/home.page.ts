import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SharedService } from '../pages/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  horaActual: string | undefined;
  idRolUsuario: number | undefined;
  emergenciasActivas = [
    { titulo: 'Incendio en Edificio A', descripcion: 'Se reporta un incendio en el cuarto piso.' },
    { titulo: 'Accidente de Tráfico', descripcion: 'Colisión múltiple en la autopista.' }
  ];
  constructor(private navCtrl: NavController, private router: Router, private shared: SharedService) {}

  ngOnInit() {
    this.actualizarHora();
    setInterval(() => {
      this.actualizarHora();
    }, 1000); // Actualiza la hora cada segundo
    this.obtenerRolUsuario();
  }

  obtenerRolUsuario() {
    this.idRolUsuario = this.shared.getidRolUsuario();
  }

  actualizarHora() {
    const ahora = new Date();
    this.horaActual = ahora.toLocaleTimeString(); // Esto da la hora en formato local HH:MM:SS
  }

  nuevaEmergencia() {
    // Lógica para crear una nueva emergencia
    console.log('Creando una nueva emergencia');
  }

  verHistorial() {
    // Lógica para ver el historial de emergencias
    console.log('Viendo el historial de emergencias');
  }

  irConfiguraciones() {
    // Lógica para ir a la configuración
    console.log('Navegando a la configuración');
  }

  // Funciones de navegación añadidas
  irchatvivo() {
    // Navega a la página de chat en vivo
    this.navCtrl.navigateRoot('/chat-vivo');
  }

  irlogin() {
    // Navega a la página de login de paramédico
    this.navCtrl.navigateRoot('/login-paramedico');
  }

  irconfgunidad() {
    // Navega a la página de configuración de unidad
    this.navCtrl.navigateRoot('/configuracion-unidad');
  }

  irHcasos() {
    // Navega a la página de historial de casos
    this.navCtrl.navigateRoot('/detalles-caso-anterior');
  }

  irPhospital() {
    // Navega a la página de preferencia de hospitales
    this.navCtrl.navigateRoot('/preferencia-hospital');
  }

  irSP() {
    // Navega a la página de soporte técnico
    this.navCtrl.navigateRoot('/soporte-tecnico');
  }
}

