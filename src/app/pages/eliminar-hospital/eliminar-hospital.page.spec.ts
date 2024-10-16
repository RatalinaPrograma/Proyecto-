import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarHospitalPage } from './eliminar-hospital.page';

describe('EliminarHospitalPage', () => {
  let component: EliminarHospitalPage;
  let fixture: ComponentFixture<EliminarHospitalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarHospitalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
