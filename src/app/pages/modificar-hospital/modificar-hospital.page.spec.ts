import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarHospitalPage } from './modificar-hospital.page';

describe('ModificarHospitalPage', () => {
  let component: ModificarHospitalPage;
  let fixture: ComponentFixture<ModificarHospitalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarHospitalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
