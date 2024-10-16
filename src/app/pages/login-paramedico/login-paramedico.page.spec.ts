import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginParamedicoPage } from './login-paramedico.page';

describe('LoginParamedicoPage', () => {
  let component: LoginParamedicoPage;
  let fixture: ComponentFixture<LoginParamedicoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginParamedicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
