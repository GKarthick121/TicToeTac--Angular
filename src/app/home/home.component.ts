import { Component } from '@angular/core';
import { slideInOutAnimation } from '../route-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[slideInOutAnimation],
  host:{'[@slideInOutAnimation]': '' }
})
export class HomeComponent  {

}
