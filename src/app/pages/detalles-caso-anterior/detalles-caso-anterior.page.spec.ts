import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesCasoAnteriorPage } from './detalles-caso-anterior.page';

describe('DetallesCasoAnteriorPage', () => {
  let component: DetallesCasoAnteriorPage;
  let fixture: ComponentFixture<DetallesCasoAnteriorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesCasoAnteriorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
