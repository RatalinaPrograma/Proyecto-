import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegCausaemergenciaPage } from './reg-causaemergencia.page';

describe('RegCausaemergenciaPage', () => {
  let component: RegCausaemergenciaPage;
  let fixture: ComponentFixture<RegCausaemergenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegCausaemergenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
