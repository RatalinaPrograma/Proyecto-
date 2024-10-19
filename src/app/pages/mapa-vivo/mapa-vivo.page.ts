import { Component, OnInit } from '@angular/core';
import { MapaService } from '../services/mapa.service';
import * as L from 'leaflet';
@Component({
  selector: 'app-mapa-vivo',
  templateUrl: './mapa-vivo.page.html',
  styleUrls: ['./mapa-vivo.page.scss'],
})
export class MapaVivoPage implements OnInit {
  private map!: L.Map;

  constructor(private mapaService: MapaService) {}

  ngOnInit() {
    this.initMap();
  }

  private initMap(): void {
    // Inicializa el mapa
    this.map = L.map('map').setView([-33.426961059472845, -70.64806328146462], 5);
    
    // Agrega la capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);

    // Obtén los marcadores desde la API y agrégalos al mapa
    this.mapaService.obtenerMarcadores().subscribe((data) => {
      console.log('Datos recibidos desde la API:', data); // Verifica la respuesta aquí

      if (data && data.marcadores) {
        data.marcadores.forEach((marcador: any) => {
          console.log('Marcador:', marcador); // Verificar cada marcador individual

          L.marker([marcador.lat, marcador.lng])
            .addTo(this.map)
            .bindPopup(marcador.hospital)
            .openPopup(); // Abre el popup para verificar
        });
      } else {
        console.error('Formato incorrecto en los datos recibidos');
      }
    }, (error) => {
      console.error('Error al obtener marcadores:', error); // Detectar problemas con la API
    });
  }
}
