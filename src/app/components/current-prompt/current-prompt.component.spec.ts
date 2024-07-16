import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPromptComponent } from './current-prompt.component';

describe('CurrentPromptComponent', () => {
  let component: CurrentPromptComponent;
  let fixture: ComponentFixture<CurrentPromptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentPromptComponent]
    });
    fixture = TestBed.createComponent(CurrentPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
