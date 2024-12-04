import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciodetalleComponent } from './serviciodetalle.component';

describe('ServiciodetalleComponent', () => {
  let component: ServiciodetalleComponent;
  let fixture: ComponentFixture<ServiciodetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiciodetalleComponent]
    });
    fixture = TestBed.createComponent(ServiciodetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
