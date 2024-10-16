import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerHospitalPage } from './ver-hospital.page';

describe('VerHospitalPage', () => {
  let component: VerHospitalPage;
  let fixture: ComponentFixture<VerHospitalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerHospitalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
