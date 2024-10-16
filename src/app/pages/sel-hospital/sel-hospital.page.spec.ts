import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelHospitalPage } from './sel-hospital.page';

describe('SelHospitalPage', () => {
  let component: SelHospitalPage;
  let fixture: ComponentFixture<SelHospitalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelHospitalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
