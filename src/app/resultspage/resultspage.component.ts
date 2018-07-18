import { Component, OnInit } from '@angular/core';
import { QuestionlogicService } from '../questionlogic.service';

@Component({
  selector: 'app-resultspage',
  templateUrl: './resultspage.component.html',
  styleUrls: ['./resultspage.component.css']
})
export class ResultspageComponent implements OnInit {

  constructor(public qls: QuestionlogicService) {
    this.qls = qls;
  }

  ngOnInit() {
  }

}
