import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-hospital',
  templateUrl: './crud-hospital.page.html',
  styleUrls: ['./crud-hospital.page.scss'],
})
export class CrudHospitalPage implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  verHospital(){
    this.router.navigate(['/ver-hospital']); 
  }
  agregarHospital(){
    this.router.navigate(['/agregar-hospital']); 
  }
  eliminarHospital(){
    this.router.navigate(['/eliminar-hospital']); 
  }
  modificarHospital(){
    this.router.navigate(['/modificar-hospital']); 
  }

  verReporte(){
    this.router.navigate(['/home']); 
  }

}
