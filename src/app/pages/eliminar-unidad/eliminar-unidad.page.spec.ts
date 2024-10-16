import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarUnidadPage } from './eliminar-unidad.page';

describe('EliminarUnidadPage', () => {
  let component: EliminarUnidadPage;
  let fixture: ComponentFixture<EliminarUnidadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarUnidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
