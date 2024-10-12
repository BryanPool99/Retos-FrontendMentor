import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.scss']
})
export class ResultDisplayComponent {
  @Input() winner: string | null = null;
  @Input() houseCard: any = null;  
  @Input() selectedCard: any = null; 
  @Input() restartGame: () => void = () => {};
  
}
