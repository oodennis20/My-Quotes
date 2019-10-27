import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy', 'Written by Martin Luther King, Jr.', new Date(2018,10,23)),
   new Quote(2, 'Procastination is the thief of time','Written by Edward Young', new Date(2029,10,24)),
   new Quote(3, 'There is no secret way to success. It is the result of preparation, hardwork, and learning from failure', 'Written by General Colin Powell', new Date(2019,10,25)),
    new Quote(4,'If you are always trying to be normal you will never know how amazing you can be', 'Written by Maya Angelou', new Date(2010,10,26)),
  ];
  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)

      if (toDelete){
        this.quotes.splice(index,1)
    }
  }
}


  constructor() { }

  ngOnInit() {
  }

}
