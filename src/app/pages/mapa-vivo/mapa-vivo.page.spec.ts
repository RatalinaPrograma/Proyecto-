import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapaVivoPage } from './mapa-vivo.page';

describe('MapaVivoPage', () => {
  let component: MapaVivoPage;
  let fixture: ComponentFixture<MapaVivoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaVivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
