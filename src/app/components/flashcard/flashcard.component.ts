import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { QuizService } from "../../services/quiz.service";
import { Question } from "../../types/question";
import { OperationType, QuestionResult } from "../../types/operation-type.enum";
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit, OnDestroy {
  @ViewChild("answerField") answer: ElementRef;
  public totals: number = 0;
  public quizRunning: boolean = false;
  public questions: Question[] = [];
  public operatorIndicator: string;
  public selectedOp: string = "Addition";

  // Messages
  public hasWarning: boolean = false;
  public failure:boolean = false;
  public errmsg: string;
  public warningMsg: string;
  
  // Question index
  public index: number = 0;

  // Response
  public userAnswer: number;
  public quizComplete: boolean;
  public score: number;

  // Forms
  public opForm = new FormGroup ({
    opControl: new FormControl("Addition")
  });
  
  // Equation
  public x: number;
  public y: number;

  private createSubscription$: Subscription;

  constructor(private quizSvc: QuizService) { }

  ngOnInit() {
    
  }

  ngOnDestroy() 
  {
    this.createSubscription$.unsubscribe();
  }

  public startQuiz(): void
  {
    // Clear messages
    this.failure = false;
    this.hasWarning = false;
    this.quizComplete = false;

    // Reset index
    this.index = 0;

    let op: OperationType;
    switch (this.opForm.get("opControl").value)
    {
      case "Subtraction":
        op = OperationType.Subtract;
        break;
      case "Multiplication":
        op = OperationType.Multiply;
        break;
      case "Division":
        op = OperationType.Divide;
        break;
      default:
        op = OperationType.Add;
        break;
    }
    // Create the quiz
    this.createSubscription$ = this.quizSvc.CreateQuiz(op).subscribe(q => {
      this.questions = q;
      this.totals = this.questions.length;
      this.index = 0;
    }, (error) => {
      let err = <Error>error;
      this.errmsg = err.message;
      this.failure = true;
    }, () => {
      if (this.questions.length > 0)
      {
        this.quizRunning = true;
        this.setupQuestion();
      } else 
      {
        this.warningMsg = "There are no questions in this quiz. Please check the settings.";
        this.hasWarning = true;
      }
    });
  }

  public moveNext(): void 
  {
    // move on...
    // see if the current question is correct...
    this.questions[this.index].Result = this.userAnswer == this.questions[this.index].Value() ? QuestionResult.Correct : QuestionResult.Incorrect;
    this.questions[this.index].Response = this.userAnswer;
    
    this.index++;
    if (this.index < this.questions.length)
    {
      // Setup next question
      this.setupQuestion();
    }
    else 
    {
      // Done...
      this.quizRunning = false;
      this.quizComplete = true;
      this.score = this.calculateScore();
    }
  }

  // Helper method to setup the question
  private setupQuestion() {
    this.x = this.questions[this.index].TopNumber;
    this.y = this.questions[this.index].BottomNumber;
    this.operatorIndicator = this.questions[this.index].GetOperator();
    this.userAnswer = 0;
    
    if (this.answer) {
      let field = this.answer.nativeElement as HTMLInputElement;
      field.blur();
      field.focus();
    }

  }

  private calculateScore(): number
  {
    let numCorrect = this.questions.filter(q => q.Result === QuestionResult.Correct).length;
    let result = this.totals > 0 ? ((numCorrect/this.totals)*100) : 0;
    return result;
  }

}
