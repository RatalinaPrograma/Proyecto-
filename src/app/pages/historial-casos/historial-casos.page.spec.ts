import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialCasosPage } from './historial-casos.page';

describe('HistorialCasosPage', () => {
  let component: HistorialCasosPage;
  let fixture: ComponentFixture<HistorialCasosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialCasosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
