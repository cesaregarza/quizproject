import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { qClass } from './questionclass';
import { quizQuestions } from './questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionlogicService {

  constructor(private router: Router) {
    this.router = router;
   }

  a = 0;
  b = 0;
  c = 0;
  d = 0;
  vars = [this.a, this.b, this.c, this.d];
  cmax = 0;
  dmax = 0;
  page = 0;
  qArray = quizQuestions;
  qPerPage = 3;
  tally = [0, 0, 0, 0];
  tallyxor = 0;
  maxtally = [0, 0];
  result = {};

  nextQuestions(){
    //Logic for question goes here
    if (this.qArray.length < this.page * this.qPerPage){
      this.page++;
      this.router.navigate(["/questions", this.page]);
    } else {
      this.calculateResults();
      this.router.navigate(["/results"]);
    }
  }

  prevQuestions(){
    if ((this.page - 1) * this.qPerPage != 0){
      this.page--;
      this.router.navigate(["/questions", this.page]);
    } else {
      this.router.navigate([""]);
    }
  }

  calculateResults(){
    for (let i = 0; i < this.qArray.length; i++){
      let temp = this.qArray[i].type;
      if (temp >= 2){
        this.maxtally[temp - 2]++;
      }
      
      this.tally[temp] += this.qArray[i].value - 3;
    }

    for (let i = 0; i < 4; i++){
      if (this.tally[i] > 0){
        this.tallyxor ^= 1 << i;
      } else if (this.tally[i] == 0){
        let rand = Math.floor(Math.random() * 2);
        this.tallyxor ^= rand << i;
      }
    }

    this.result = this.heroes[this.tallyxor];
  }

  displayQuestions(input: number){
    return (Math.floor(input / this.qPerPage) + 1 == this.page)
  }

  showClass(input: number){
    let temp = ["left", "middle", "right"];
    return temp[ input % this.qPerPage];
  }

}
