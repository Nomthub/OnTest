import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  @ViewChild('uname') nameKey!:ElementRef;

  constructor(){ }

  ngOnInit(): void{

  }

  startQuiz(){
    localStorage.setItem("uname",this.nameKey.nativeElement.value);
  }

}
