import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarPacientesPage } from './eliminar-pacientes.page';

describe('EliminarPacientesPage', () => {
  let component: EliminarPacientesPage;
  let fixture: ComponentFixture<EliminarPacientesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarPacientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
