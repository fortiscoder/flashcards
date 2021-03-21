import { Injectable } from '@angular/core';
import { Observable  } from "rxjs";

import { QuizSettingService } from "./quiz-setting.service";

import { Question } from "../types/question";
import { OperationType } from "../types/operation-type.enum";
@Injectable()
export class QuizService {
  private Questions: Question[] = [];
  private readonly INTERATION_THREADHOLD: number = 10;
  private currentIndex: number = 0;

  constructor(private settingSvc: QuizSettingService) { }

  public MoveNext(): Question
  {
    this.currentIndex++;

    if (this.currentIndex < this.Questions.length)
    {
      return this.Questions[this.currentIndex];
    } else {
      this.currentIndex = 0; //Reset index...
      return null;
    }
  }

  public MoveBack(): Question
  {
    this.currentIndex--;

    if (this.currentIndex >= 0)
    {
      return this.Questions[this.currentIndex];
    }
    else {
      this.currentIndex = 0; //Reset index...
      return null;
    }
  }

  public GetCurrentQuestion()
  {
    return this.Questions[this.currentIndex];
  }

  public MoveFirst()
  {
    this.currentIndex = 0;
  }
  public CreateQuiz(operation: OperationType): Observable<Question[]>
  {
    let o = Observable.create((x) => {
      this.generateQuestions(operation);
      x.next(this.Questions);
      x.complete();
    });
    
    return o;
  }

  private generateQuestions(operation: OperationType): void
  {
    var q: Question;
    var counter: number;
      for (let i=0; i<this.settingSvc.TotalQuestions; i++)
      {
        counter = 0;
        do {
          // Generate question
          let top: number;
          let bottom: number;
          top = this.generateRandomNumber();
          bottom = this.generateRandomNumber();

          if ((operation == OperationType.Subtract || operation == OperationType.Divide) 
            && (top < bottom))
          {
            // Swap numbers
            let old = bottom;
            bottom = top;
            top = old;
          }

          q = new Question(top, bottom, operation);

          // Built in infinite loop protection. This is a safety valve 
          if (counter > this.INTERATION_THREADHOLD)
          {
            throw new Error("Cannot generate number. Too many interations. Please check settings.");
          }
          // Count how many random questions have been generated for this iteration
          counter++;

          // Check to see if this question exists, if so get another one
        } while(this.ValueAlreadyExists(q.Value()) == true);

        // Add quesiton to the array...
        this.Questions.push(q);
      }
  }

  private generateRandomNumber(): number
  {
    let rawNumber = Math.random() * this.settingSvc.MaxNumber;
    return Math.round(rawNumber);
  }

  private ValueAlreadyExists(value: number)
  {
    for (let q of this.Questions)
    {
      if (q.Value() == value)
      {
        return true;
      }
      else {
        return false;
      }
    }
  }
}
