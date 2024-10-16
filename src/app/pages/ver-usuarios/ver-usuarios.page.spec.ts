import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerUsuariosPage } from './ver-usuarios.page';

describe('VerUsuariosPage', () => {
  let component: VerUsuariosPage;
  let fixture: ComponentFixture<VerUsuariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerUsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
