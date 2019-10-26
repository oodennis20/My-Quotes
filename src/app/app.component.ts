import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-quotes';
  quote:string[];

  constructor(){
    this.quotes = ['If you are always trying to be normal you will never know how amazing you can be', 'Procastination is the thief of time', 'There is no secret way to succes. It is the result of preparation, hardwork, and learning from failure']
  }
}
