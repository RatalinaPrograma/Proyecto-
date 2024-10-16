import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarHospitalPage } from './agregar-hospital.page';

describe('AgregarHospitalPage', () => {
  let component: AgregarHospitalPage;
  let fixture: ComponentFixture<AgregarHospitalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarHospitalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
