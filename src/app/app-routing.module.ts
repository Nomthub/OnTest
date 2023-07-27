import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { Question1Component } from './question1/question1.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {
    path:'',redirectTo:'welcome',pathMatch:'full'
  },
  {
    path:'welcome',component:WelcomeComponent
  },
  {
    path:'question1',component:Question1Component
  },
  {
    path:'review',component:ReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
