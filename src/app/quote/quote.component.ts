import { Component, OnInit } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote= [
    {class:1, name:'The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy', details:'Written by Martin Luther King, Jr.'},
    {class:2, name:'Procastination is the thief of time', details:'Written by Edward Young'},
    {class:3, name:'There is no secret way to succes. It is the result of preparation, hardwork, and learning from failure', details:'Written by General Colin Powell'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
