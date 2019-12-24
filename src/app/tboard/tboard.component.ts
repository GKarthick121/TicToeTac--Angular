import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tboard',
  templateUrl: './tboard.component.html',
  styleUrls: ['./tboard.component.scss']
})
export class TboardComponent  {

  @Input() value: 'X' | 'O';
}
