import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { StartpageComponent } from './startpage/startpage.component';
import { QuestionpageComponent } from './questionpage/questionpage.component';
import { ResultspageComponent } from './resultspage/resultspage.component';
import { AppRoutingModule } from './/app-routing.module';
import { QuestionlogicService } from './questionlogic.service';

@NgModule({
  declarations: [
    AppComponent,
    StartpageComponent,
    QuestionpageComponent,
    ResultspageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [QuestionlogicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
