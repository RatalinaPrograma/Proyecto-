import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-unidad',
  templateUrl: './crud-unidad.page.html',
  styleUrls: ['./crud-unidad.page.scss'],
})
export class CrudUnidadPage implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  verUnidad(){
    this.router.navigate(['/ver-unidad']); 
  }
  agregarUnidad(){
    this.router.navigate(['/agregar-unidad']); 
  }
  eliminarUnidad(){
    this.router.navigate(['/eliminar-unidad']); 
  }
  modificarUnidad(){
    this.router.navigate(['/modificar-unidad']); 
  }

  verReporte(){
    this.router.navigate(['/home']); 
  }

}
