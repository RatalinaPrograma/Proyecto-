import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudPacientesPage } from './crud-pacientes.page';

describe('CrudPacientesPage', () => {
  let component: CrudPacientesPage;
  let fixture: ComponentFixture<CrudPacientesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPacientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
