import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegratedPromptsComponent } from './integrated-prompts.component';

describe('IntegratedPromptsComponent', () => {
  let component: IntegratedPromptsComponent;
  let fixture: ComponentFixture<IntegratedPromptsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntegratedPromptsComponent]
    });
    fixture = TestBed.createComponent(IntegratedPromptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
