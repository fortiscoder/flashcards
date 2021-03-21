import { TestBed, inject } from '@angular/core/testing';

import { QuizSettingService } from './quiz-setting.service';

describe('QuizSettingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizSettingService]
    });
  });

  it('should be created', inject([QuizSettingService], (service: QuizSettingService) => {
    expect(service).toBeTruthy();
  }));
});
