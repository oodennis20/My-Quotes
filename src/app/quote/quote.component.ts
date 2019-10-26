import { Component, OnInit } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote= [
    {class:1, name:'If you are always trying to be normal you will never know how amazing you can be'},
    {class:2, name:'Procastination is the thief of time'},
    {class:3, name:'There is no secret way to succes. It is the result of preparation, hardwork, and learning from failure'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
