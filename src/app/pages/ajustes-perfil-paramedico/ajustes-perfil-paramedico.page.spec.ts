import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjustesPerfilParamedicoPage } from './ajustes-perfil-paramedico.page';

describe('AjustesPerfilParamedicoPage', () => {
  let component: AjustesPerfilParamedicoPage;
  let fixture: ComponentFixture<AjustesPerfilParamedicoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustesPerfilParamedicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
