import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: <html></html>
  styleUrls: ['./app.component.css']
  // style: []
})
export class AppComponent {
  title = 'myapp'; // properties are directly binded in the component, in the scope of its own template, using the templateURL
  titlestr: string;
  greet: string;
  count: number;

  constructor() {
    this.titlestr = 'Nagarro';
    this.greet = 'Hello !!';
    this.count = 3;
  }

  counter() {
    this.count++; 
  }
}
