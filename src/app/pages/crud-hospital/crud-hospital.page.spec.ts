import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudHospitalPage } from './crud-hospital.page';

describe('CrudHospitalPage', () => {
  let component: CrudHospitalPage;
  let fixture: ComponentFixture<CrudHospitalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudHospitalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
