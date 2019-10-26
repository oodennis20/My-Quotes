import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote= [
    new Quote(1, 'The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy', details:'Written by Martin Luther King, Jr.'),
   new Quote(2, 'Procastination is the thief of time', details:'Written by Edward Young'),
   new Quote(3, 'There is no secret way to success. It is the result of preparation, hardwork, and learning from failure', details:'Written by General Colin Powell'),
    new Quote(4,'If you are always trying to be normal you will never know how amazing you can be', details:'Written by Maya Angelou'),
  ];
  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  constructor() { }

  ngOnInit() {
  }

}
