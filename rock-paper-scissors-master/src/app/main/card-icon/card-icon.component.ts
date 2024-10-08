import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-icon',
  templateUrl: './card-icon.component.html',
  styleUrls: ['./card-icon.component.scss']
})
export class CardIconComponent{
  @Input() imageUrl!: string;
  @Input() backgroundColor!: string;
  @Input() borderColor!: string;
  @Input() altText!: string;
  @Output() iconClick = new EventEmitter<void>();

  onIconClick() {
    this.iconClick.emit(); // Emite el evento cuando se haga clic en el icono
  }
}
