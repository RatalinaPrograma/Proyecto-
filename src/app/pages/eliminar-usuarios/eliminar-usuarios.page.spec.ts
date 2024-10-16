import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarUsuariosPage } from './eliminar-usuarios.page';

describe('EliminarUsuariosPage', () => {
  let component: EliminarUsuariosPage;
  let fixture: ComponentFixture<EliminarUsuariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarUsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
