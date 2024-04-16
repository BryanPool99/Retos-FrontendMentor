import { Component, OnInit } from '@angular/core';
import { Result } from '../model/result.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  data: Result[] = [];
  averageScore: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Result[]>('../../assets/data.json').subscribe(data => {
      this.data = data;
      this.calculateAverageScore();
    });
  }

  calculateAverageScore(): void {
    if (this.data.length > 0) {
      const totalScore = this.data.reduce((acc, item) => acc + item.score, 0);
      this.averageScore = totalScore / this.data.length;
    }
  }
}
