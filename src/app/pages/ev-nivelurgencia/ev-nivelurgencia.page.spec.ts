import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EvNivelurgenciaPage } from './ev-nivelurgencia.page';

describe('EvNivelurgenciaPage', () => {
  let component: EvNivelurgenciaPage;
  let fixture: ComponentFixture<EvNivelurgenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EvNivelurgenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
