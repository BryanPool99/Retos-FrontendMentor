import { Component, Input, OnInit } from '@angular/core';
import { CardIconService } from '../service/card-icon.service';
import { Card, GAME_RULES } from '../constants/game-constants';
import { ScoreService } from '../service/score.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() isBasicGame: boolean = false;

  cards: Card[] = [];
  selectedCard: Card | null = null; // Asegúrate de que selectedCard y houseCard sean del tipo Card
  houseCard: Card | null = null;
  winner: string = '';

  constructor(private cardService: CardIconService,private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.cardService.getCards().subscribe((data: any) => {
      console.log("LA DATA ES:", data);
      this.cards = data;
    });
  }

  handleIconClick(card: any) {
    this.selectedCard = card;
    this.pickForHouseWithDelay();
    console.log('Icon clicked:', card);
  }

  pickForHouseWithDelay() {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * this.cards.length);
      this.houseCard = this.cards[randomIndex];
      this.determineWinner();
    }, 1500);  // Retraso de 1500 milisegundos (1.5 segundos)
  }

  determineWinner() {
    if (this.selectedCard && this.houseCard) {  // Verificar que ambas cartas no son null
      if (this.selectedCard.name === this.houseCard.name) {
        this.winner = 'It\'s a tie!';
      } else if (GAME_RULES[this.selectedCard.name].beats === this.houseCard.name) {
        this.winner = 'You win';
        this.scoreService.incrementScore();
      } else {
        this.winner = 'You lose';
        this.scoreService.decrementScore();
      }
    }
  }

  restartGame() {
    this.selectedCard = null;
    this.houseCard = null;
    this.winner = '';
  }
}
