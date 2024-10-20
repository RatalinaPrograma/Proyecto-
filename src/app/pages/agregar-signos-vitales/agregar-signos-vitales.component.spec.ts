import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarSignosVitalesComponent } from './agregar-signos-vitales.component';

describe('AgregarSignosVitalesComponent', () => {
  let component: AgregarSignosVitalesComponent;
  let fixture: ComponentFixture<AgregarSignosVitalesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarSignosVitalesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarSignosVitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
