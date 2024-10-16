import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudUnidadPage } from './crud-unidad.page';

describe('CrudUnidadPage', () => {
  let component: CrudUnidadPage;
  let fixture: ComponentFixture<CrudUnidadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudUnidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
