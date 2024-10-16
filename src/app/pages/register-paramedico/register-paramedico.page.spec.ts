import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterParamedicoPage } from './register-paramedico.page';

describe('RegisterParamedicoPage', () => {
  let component: RegisterParamedicoPage;
  let fixture: ComponentFixture<RegisterParamedicoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterParamedicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
