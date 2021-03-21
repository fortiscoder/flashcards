import { Component, OnInit } from '@angular/core';

import { QuizSettingService } from "../../services/quiz-setting.service";

@Component({
  selector: 'app-flashcard-setting',
  templateUrl: './flashcard-setting.component.html',
  styleUrls: ['./flashcard-setting.component.css']
})
export class FlashcardSettingComponent implements OnInit {
  public maxQuestions: number;
  public highestNumber: number;

  public success: boolean = false;
  public failure: boolean = false;

  public errmsg: string = "";

  constructor(private settingSvc: QuizSettingService) { }

  ngOnInit() {
    this.maxQuestions = this.settingSvc.TotalQuestions;
    this.highestNumber = this.settingSvc.MaxNumber

    this.success = false;
    this.failure = false;
  }

  public onSave(): void
  {
    console.log('Save clicked...');
    
    // Clear panels
    this.success = false;
    this.failure = false;

    this.settingSvc.MaxNumber = this.highestNumber;
    this.settingSvc.TotalQuestions = this.maxQuestions;

    this.settingSvc.Save().subscribe(result => {
      // Changes saved.... Alert the user...
      this.success = true;
    }, (error) => {
      let err = <Error>error;
      this.errmsg = err.message;
      this.failure = true;
    })
  }
}
