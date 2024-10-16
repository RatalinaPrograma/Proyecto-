import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarPacientesPage } from './agregar-pacientes.page';

describe('AgregarPacientesPage', () => {
  let component: AgregarPacientesPage;
  let fixture: ComponentFixture<AgregarPacientesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPacientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
