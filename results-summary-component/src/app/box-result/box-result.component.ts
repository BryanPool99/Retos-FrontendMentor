import { Component, Input } from '@angular/core';

@Component({
  selector: 'box-result',
  templateUrl: './box-result.component.html',
  styleUrls: ['./box-result.component.css']
})
export class BoxResultComponent{
  @Input() averageScore: number = 0;
  getFormattedScore(): string {
    return this.averageScore.toFixed(0); // Redondear al entero más cercano
  }
}
