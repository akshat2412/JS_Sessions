import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fb-button',
  templateUrl: './fb-button.component.html',
  styleUrls: ['./fb-button.component.css']
})
export class FbButtonComponent {
@Input() text: string;
@Input() color: string;
}
