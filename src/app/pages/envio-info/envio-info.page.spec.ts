import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnvioInfoPage } from './envio-info.page';

describe('EnvioInfoPage', () => {
  let component: EnvioInfoPage;
  let fixture: ComponentFixture<EnvioInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
