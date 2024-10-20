import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificarSignosVitalesComponent } from './modificar-signos-vitales.component';

describe('ModificarSignosVitalesComponent', () => {
  let component: ModificarSignosVitalesComponent;
  let fixture: ComponentFixture<ModificarSignosVitalesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarSignosVitalesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarSignosVitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
