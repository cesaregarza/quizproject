import { Component, OnInit } from '@angular/core';
import { QuestionlogicService } from '../questionlogic.service';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})
export class StartpageComponent implements OnInit {

  constructor(public qls: QuestionlogicService) {
    this.qls = qls;
  }
  
  ngOnInit() {
  }

}
