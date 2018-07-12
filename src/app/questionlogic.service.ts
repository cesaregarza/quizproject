import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionlogicService {

  constructor() { }

  a = 0;
  b = 0;
  c = 1;
  d = 1;
  vars = [this.a, this.b, this.c, this.d];

  

}
