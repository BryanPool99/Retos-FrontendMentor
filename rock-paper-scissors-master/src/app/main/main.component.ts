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
  selectedCard: Card | null = null;
  houseCard: Card | null = null;
  winner: string = '';
  winSound!: HTMLAudioElement;
  loseSound!: HTMLAudioElement;
  drawSound!:HTMLAudioElement;

  constructor(readonly cardService: CardIconService, readonly scoreService: ScoreService) {
    this.winSound = new Audio('../../assets/sounds/win.mp3');
    this.loseSound = new Audio('../../assets/sounds/lose.mp3');
    this.drawSound = new Audio('../../assets/sounds/tie.mp3');
  }

  ngOnInit(): void {
    this.cardService.getCards().subscribe((data: any) => {
      this.cards = data;
    });
  }

  handleIconClick(card: any) {
    this.selectedCard = card;
    this.pickForHouseWithDelay();
  }

  pickForHouseWithDelay() {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * this.cards.length);
      this.houseCard = this.cards[randomIndex];
      this.determineWinner();
    }, 1500);
  }

  determineWinner() {
    if (this.selectedCard && this.houseCard) {
      if (this.selectedCard.name === this.houseCard.name) {
        this.winner = 'It\'s a tie!';
        this.playDrawSound();
      } else if (GAME_RULES[this.selectedCard.name].beats === this.houseCard.name) {
        this.winner = 'You win';
        this.scoreService.incrementScore();
        this.playWinSound();
      } else {
        this.winner = 'You lose';
        this.scoreService.decrementScore();
        this.playLoseSound();
      }
    }
  }

  playWinSound() {
    this.winSound.currentTime = 0;
    this.winSound.play();
  }

  playDrawSound() {
    this.drawSound.currentTime = 0;
    this.drawSound.play();
  }

  playLoseSound() {
    this.loseSound.currentTime = 0;
    this.loseSound.play();
  }

  restartGame() {
    this.selectedCard = null;
    this.houseCard = null;
    this.winner = '';
    this.winSound.pause();
    this.winSound.currentTime = 0;
    this.loseSound.pause();
    this.loseSound.currentTime = 0;
    this.drawSound.pause();
    this.drawSound.currentTime= 0;
  }
}
