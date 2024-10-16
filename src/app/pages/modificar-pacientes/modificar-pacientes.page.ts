import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar-pacientes',
  templateUrl: './modificar-pacientes.page.html',
  styleUrls: ['./modificar-pacientes.page.scss'],
})
export class ModificarPacientesPage implements OnInit {
  public rut: string = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.rut = this.route.snapshot.paramMap.get('rut') || '';
    alert(this.rut);
  }

}
