import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfRecepcionPage } from './conf-recepcion.page';

describe('ConfRecepcionPage', () => {
  let component: ConfRecepcionPage;
  let fixture: ComponentFixture<ConfRecepcionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfRecepcionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
