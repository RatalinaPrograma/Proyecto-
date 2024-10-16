import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-usuarios',
  templateUrl: './crud-usuarios.page.html',
  styleUrls: ['./crud-usuarios.page.scss'],
})
export class CrudUsuariosPage implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  verUsuario(){
    this.router.navigate(['/ver-usuarios']); 
  }
  agregarUsuario(){
    this.router.navigate(['/agregar-usuarios']); 
  }
  eliminarUsuario(){
    this.router.navigate(['/eliminar-usuarios']); 
  }
  modificarUsuario(){
    this.router.navigate(['/modificar-usuarios']); 
  }

  verReporte(){
    this.router.navigate(['/home']); 
  }

}
