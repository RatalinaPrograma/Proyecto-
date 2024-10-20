import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa-vivo',
  templateUrl: './mapa-vivo.page.html',
  styleUrls: ['./mapa-vivo.page.scss'],
})
export class MapaVivoPage implements AfterViewInit {
  map!: L.Map;

  ngAfterViewInit() {
    this.map = L.map('map', {
      center: [-33.4489, -70.6693], // Santiago, Chile
      zoom: 13
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    // Asegura que el mapa se renderice correctamente después de la carga
    setTimeout(() => {
      this.map.invalidateSize();
    }, 500);
  }
}
