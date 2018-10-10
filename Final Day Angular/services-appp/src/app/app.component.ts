import { Component, OnInit } from '@angular/core';
import { RequestService } from './request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'services-appp';
  constructor(private getData: RequestService) {}

  ngOnInit() {
    this.getData.makeRequest();
  }
}
