import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fb-input-box',
  templateUrl: './fb-input-box.component.html',
  styleUrls: ['./fb-input-box.component.css']
})
export class FbInputBoxComponent {
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() width = 172;
  @Input() height = '30px';
  @Input() size = 'large';
}
