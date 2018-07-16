import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartpageComponent } from './startpage/startpage.component';
import { QuestionpageComponent } from './questionpage/questionpage.component';
import { ResultspageComponent} from './resultspage/resultspage.component';

const routes: Routes = [
  {
    path: "",
    component: StartpageComponent
  },
  {
    path: "questions/:page",
    component: QuestionpageComponent
  },
  {
    path: "results",
    component: ResultspageComponent
  },
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
