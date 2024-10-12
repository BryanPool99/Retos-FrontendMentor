import { Component } from '@angular/core';
import { Card } from './constants/game-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rock-paper-scissors-master';
  isBasicGame=true;
}
