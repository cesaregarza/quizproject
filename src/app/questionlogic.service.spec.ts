import { TestBed, inject } from '@angular/core/testing';

import { QuestionlogicService } from './questionlogic.service';

describe('QuestionlogicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionlogicService]
    });
  });

  it('should be created', inject([QuestionlogicService], (service: QuestionlogicService) => {
    expect(service).toBeTruthy();
  }));
});
