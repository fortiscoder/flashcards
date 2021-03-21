import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardSettingComponent } from './flashcard-setting.component';

describe('FlashcardSettingComponent', () => {
  let component: FlashcardSettingComponent;
  let fixture: ComponentFixture<FlashcardSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
