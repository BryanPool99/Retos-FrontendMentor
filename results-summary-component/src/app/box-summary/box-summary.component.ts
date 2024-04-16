import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from '../model/result.interface';
@Component({
  selector: 'box-summary',
  templateUrl: './box-summary.component.html',
  styleUrls: ['./box-summary.component.css']
})
export class BoxSummaryComponent implements OnInit{
  averageScore: number=0;
  data:Result[]=[];
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get<Result[]>('../../assets/data.json').subscribe(data => {
      this.data = data;
      this.calculateAverageScore();
    });
  }
  // Método para calcular el promedio de los puntajes
  calculateAverageScore(): void {
    if (this.data.length > 0) {
      const totalScore = this.data.reduce((acc, item) => acc + item.score, 0);
      this.averageScore = totalScore / this.data.length;
    }
  }
  getColor(category: string): string {
    switch (category) {
      case 'Reaction':
        return 'hsl(0, 100%, 67%)';
      case 'Memory':
        return 'hsl(39, 100%, 56%)';
      case 'Verbal':
        return 'hsl(166, 100%, 37%)';
      case 'Visual':
        return 'hsl(234, 85%, 45%)';
      default:
        return 'black';
    }
  }

  getBackgroundColor(category: string): string {
    switch (category) {
      case 'Reaction':
        return 'hsla(0, 100%, 67%, 0.15)';
      case 'Memory':
        return 'hsla(39, 100%, 56%, 0.15)';
      case 'Verbal':
        return 'hsla(166, 100%, 37%, 0.15)';
      case 'Visual':
        return 'hsla(234, 85%, 45%, 0.15)';
      default:
        return 'transparent';
    }
  }
}
