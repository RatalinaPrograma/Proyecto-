import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaEmergenciaPage } from './nueva-emergencia.page';

describe('NuevaEmergenciaPage', () => {
  let component: NuevaEmergenciaPage;
  let fixture: ComponentFixture<NuevaEmergenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaEmergenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
