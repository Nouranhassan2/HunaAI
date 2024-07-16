import { TestBed } from '@angular/core/testing';

import { PromptShareServiceService } from './prompt-share-service.service';

describe('PromptShareServiceService', () => {
  let service: PromptShareServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromptShareServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
