import { Component, Input, OnInit } from '@angular/core';
import { ScoreService } from '../service/score.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isBasicGame: boolean = false;
  score: number = 0

  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
    console.log("INICIANDO COMPONENTE DE CONTADOR");
    this.scoreService.score$.subscribe((score: number) => {
      this.score = score;
    });
    console.log("SCORE:",this.score);
    
  }
}
