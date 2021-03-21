import { OperationType, QuestionResult } from './operation-type.enum';
export class Question {
    public Result: QuestionResult
    public Response: number;

    private readonly ICON_INCORRECT: string = "fa fa-times incorrect";
    private readonly ICON_CORRECT: string = "fa fa-check correct";

    // readonly property...
    get ResultIcon(): string 
    {
        return this.Result === QuestionResult.Correct ? this.ICON_CORRECT : this.ICON_INCORRECT;
    }

    constructor(public TopNumber: number, 
        public BottomNumber: number,
        public Operation: OperationType)
    {
        this.Result = null;
    }

    public Equals (question: Question): boolean
    {
        return (this.Value() == question.Value());
    }

    public Equation(): string
    {
        let op = this.GetOperator();
        return `${this.TopNumber} ${op} ${this.BottomNumber}`;
    }

    public GetOperator(): string 
    {
      switch (this.Operation)
      {
        case OperationType.Add:
          return "+";
        case OperationType.Subtract:
          return "-";
        case OperationType.Multiply:
          return "x";
        case OperationType.Divide:
          return "/";
      }
    }

    public Value(): number
    {
        var answer: number = 0;
        switch (this.Operation)
        {
            case OperationType.Add:
                answer = this.TopNumber + this.BottomNumber;
                break;
            case OperationType.Subtract:
                answer = this.TopNumber - this.BottomNumber;
                break;
            case OperationType.Multiply:
                answer = this.TopNumber * this.BottomNumber;
                break;
            case OperationType.Divide:
                answer = this.TopNumber/this.BottomNumber;
                break;
        }

        return answer;
    }
}
