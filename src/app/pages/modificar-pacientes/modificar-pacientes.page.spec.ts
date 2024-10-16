import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarPacientesPage } from './modificar-pacientes.page';

describe('ModificarPacientesPage', () => {
  let component: ModificarPacientesPage;
  let fixture: ComponentFixture<ModificarPacientesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPacientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
