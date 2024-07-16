import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayTunedComponent } from './stay-tuned.component';

describe('StayTunedComponent', () => {
  let component: StayTunedComponent;
  let fixture: ComponentFixture<StayTunedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StayTunedComponent]
    });
    fixture = TestBed.createComponent(StayTunedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
