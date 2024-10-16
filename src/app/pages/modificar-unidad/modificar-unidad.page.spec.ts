import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarUnidadPage } from './modificar-unidad.page';

describe('ModificarUnidadPage', () => {
  let component: ModificarUnidadPage;
  let fixture: ComponentFixture<ModificarUnidadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarUnidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
