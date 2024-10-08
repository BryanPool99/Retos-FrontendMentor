import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private readonly LOCAL_STORAGE_KEY = 'game_score';
  private initialScore = Number(localStorage.getItem(this.LOCAL_STORAGE_KEY)) || 0;
  private scoreSubject = new BehaviorSubject<number>(this.initialScore);

  score$ = this.scoreSubject.asObservable();

  incrementScore() {
    const currentScore = this.scoreSubject.getValue();
    const newScore = currentScore + 1;
    this.scoreSubject.next(newScore);
    localStorage.setItem(this.LOCAL_STORAGE_KEY, newScore.toString());
  }

  decrementScore() {
    const currentScore = this.scoreSubject.getValue();
    if (currentScore > 0) {
      const newScore = currentScore - 1;
      this.scoreSubject.next(newScore);
      localStorage.setItem(this.LOCAL_STORAGE_KEY, newScore.toString());
    }
  }
}
