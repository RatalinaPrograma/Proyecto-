import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegDetallesMedicosPage } from './reg-detallesmedicos.page';

describe('RegDetallesmedicosPage', () => {
  let component: RegDetallesMedicosPage;
  let fixture: ComponentFixture<RegDetallesMedicosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegDetallesMedicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
