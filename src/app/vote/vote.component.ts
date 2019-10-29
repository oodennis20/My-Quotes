import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Output() isComplete = new EventEmitter<boolean>();
  uvotes = 0;
  dvotes = 0;

  uVote(){
    this.uvotes = this.uvotes + 1;//adds one on mouse click
  }
  dVote(){
    this.dvotes = this.dvotes + 1;//adds one per mouse click
  }
  constructor() { }

  ngOnInit() {
  }

}
