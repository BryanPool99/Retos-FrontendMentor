import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isBasicGame: boolean = false;
  score: number = 0

  constructor() { }

  ngOnInit() {
    console.log("INICIANDO COMPONENTE DE CONTADOR");
    console.log("El juego esta en mdo basico?", this.isBasicGame);
  }
  incrementar() {
    this.score++;
  }
}
