import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerPacientesPage } from './ver-pacientes.page';

describe('VerPacientesPage', () => {
  let component: VerPacientesPage;
  let fixture: ComponentFixture<VerPacientesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPacientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
