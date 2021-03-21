import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
@Injectable()
export class QuizSettingService {
  public TotalQuestions: number;
  public MaxNumber: number;

  private readonly TOTAL_Q_KEY: string = "totalQuestions";
  private readonly HIGH_NUM: string = "highestNumber";

  constructor() {
    try
    {
      let tVal = localStorage.getItem(this.TOTAL_Q_KEY);
      let hVal = localStorage.getItem(this.HIGH_NUM);

      this.TotalQuestions = tVal != null ? +tVal : 0;
      this.MaxNumber = hVal != null ? +hVal : 0;

    } catch (er)
    {
      this.TotalQuestions = 0;
      this.MaxNumber = 0;
    }
   }

  public Save(): Observable<boolean>
  {
    
    let result = Observable.create((sub) => {

      try 
      {
        localStorage.setItem(this.TOTAL_Q_KEY, this.TotalQuestions.toString());
        localStorage.setItem(this.HIGH_NUM, this.MaxNumber.toString());
      }
      catch (er)
      {
        throw new Error(er);
      }

      sub.next(true);
      sub.complete();
    });

    return result;
  }
}
