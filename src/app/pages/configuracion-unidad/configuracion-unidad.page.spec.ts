import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfiguracionUnidadPage } from './configuracion-unidad.page';

describe('ConfiguracionUnidadPage', () => {
  let component: ConfiguracionUnidadPage;
  let fixture: ComponentFixture<ConfiguracionUnidadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionUnidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
