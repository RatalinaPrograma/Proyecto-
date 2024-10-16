import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarUnidadPage } from './agregar-unidad.page';

describe('AgregarUnidadPage', () => {
  let component: AgregarUnidadPage;
  let fixture: ComponentFixture<AgregarUnidadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarUnidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
