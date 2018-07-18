import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { quizQuestions } from './questions';
import { heroList } from './heroList';

@Injectable({
  providedIn: 'root'
})
export class QuestionlogicService {

  constructor(private router: Router) {
    this.router = router;
  }

  numbers = [1, 2, 3, 4, 5];
  options = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"];
  page = 1;
  qArray = quizQuestions;
  qPerPage = 3;
  tally = [0, 0, 0, 0];
  tallyxor = 0;
  maxtally = [0, 0];
  heroes = heroList;
  result = this.heroes[0];

  startQuiz() {
    this.page = 1;
    this.tally = [0, 0, 0, 0];
    this.tallyxor = 0;
    this.maxtally = [0,0];
    for (let i = 0; i < this.qArray.length; i++) {
      this.qArray[i].value = 3;
    }
    this.router.navigate(["/questions", this.page]);
  }

  nextQuestions() {
    //If the next page's first question has an index that would be smaller than the questions array, we will allow it to navigate to the next page. Otherwise, we'll calculate the results and go to the results page.
    if (this.qArray.length > (this.page * this.qPerPage)) {
      this.page++;
      this.router.navigate(["/questions", this.page]);
    } else {
      this.calculateResults();
      this.router.navigate(["/results"]);
    }
  }

  prevQuestions() {
    //So long as the page we're on isn't the first page, we'll go back one page. Otherwise, we'll go back to the start page.
    if (this.page != 1) {
      this.page--;
      this.router.navigate(["/questions", this.page]);
    } else {
      this.router.navigate([""]);
    }
  }

  calculateResults() {
    //For Loop
    //Purpose: Go through the Questions Array, and tally up the results in this.tally. The index of where the tally will be modified is given by the type property. The reverse property will reverse the sign if it is defined as true. Additionally, find the max value possible for variables c and d. 
    for (let i = 0; i < this.qArray.length; i++) {
      let qtype = this.qArray[i].type;
      let sign = (this.qArray[i].reverse == true) ? 1 : -1;
      if (qtype >= 2) {
        this.maxtally[qtype - 2] += 2;
      }

      this.tally[qtype] += (this.qArray[i].value - 3) * sign;
    }

    //For Loop
    //Purpose: Go through this.tally and find if the answer is positive or zero. If the answer is positive, it will reassign tallyxor by xor-ing tallyxor with a bitshifted varible. Because it will go through all four values (a, b, c, d), it will assign each variable its own bit for positive or negative. The final four bits of tallyxor will be reserved for dcba in that order, with a 1 or a 0 being given depending on whether the final tally for dcba is positive. If the final result is zero, we want that variable to be assigned a random value as the test was inconclusive. This will prevent the test being biased towards one result or another by having zero randomly assigned.
    for (let i = 0; i < 4; i++) {
      if (this.tally[i] > 0) {
        this.tallyxor ^= 1 << i;
      } else if (this.tally[i] == 0) {
        let rand = Math.floor(Math.random() * 2);
        this.tallyxor ^= rand << i;
      }
    }

    //The previous For Loop made tallyxor into a number between 0 and 15. This is the exact same size as our heroes array, and is intentional. Thus, we assign the selected hero object to our result, for output during the results page.
    this.result = this.heroes[this.tallyxor];
  }

  displayQuestions(input: number) {
    return (Math.floor(input / this.qPerPage) + 1 == this.page)
  }

  showClass(input: number, testagainst: number) {
    return ((input % 3) == testagainst);
  }

}
