import { Component } from '@angular/core';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  
  public point : number=0;
  public name : string="";
  public questionList : any = [];
  public currentQuestion : number = 0;
  counter=60;
  interval$:any;
  progress:string="9";
  isQuizCompleted : boolean = false;

  constructor(private questionService : QuestionService){ }

  ngOnInit(): void{
    this.name = localStorage.getItem("uname")!;
    this.getAllQuestions();
  }

  getAllQuestions(){
   this.questionService.getQuestionJson()
   .subscribe(res=>{
    this.questionList = res.questions;
   })
  }

  nextQuestion(){
    this.currentQuestion++;
  }

  previousQuestion(){
    this.currentQuestion--;
  }

  answer(currentQno: number, option:any){
    if(currentQno===this.questionList.length){
      this.isQuizCompleted = true;
    }
    if(option.correct){
      this.currentQuestion++;
      this.getProgressPercent();
      
    }
    else{
        this.currentQuestion++;
        this.getProgressPercent();    
    }
  }

  getProgressPercent(){
    this.progress = ((this.currentQuestion/this.questionList.length)*100).toString();
    return this.progress;
  }

}
