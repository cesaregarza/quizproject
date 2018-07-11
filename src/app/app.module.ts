import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartpageComponent } from './startpage/startpage.component';
import { QuestionpageComponent } from './questionpage/questionpage.component';
import { ResultspageComponent } from './resultspage/resultspage.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    StartpageComponent,
    QuestionpageComponent,
    ResultspageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
