import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerUnidadPage } from './ver-unidad.page';

describe('VerUnidadPage', () => {
  let component: VerUnidadPage;
  let fixture: ComponentFixture<VerUnidadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerUnidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
