import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private baseUrl: string = 'https://opentdb.com/api.php?type=boolean';
  private answers: any[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  private createRequestHeader() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return headers;
  }

  getQuestions(categoryId: string, difficulty: string, questionsAmount: number): Observable<any> {
    const serverUrl = `${this.baseUrl}&category=${categoryId}&difficulty=${difficulty}&amount=${questionsAmount}`;
    const headers = this.createRequestHeader();

    return this.http.get<any>(serverUrl, { headers: headers });
  }

  setAnswer(question: string, answer: boolean | string, correctAnswer: boolean): void {
    this.answers.push({
      question,
      answer,
      correctAnswer,
    });
  }

  getAnswers() {
    return this.answers;
  }

  getPoints() {
    const maxPoints = this.answers.length;

    const points = this.answers.reduce((sum, el) => {
      sum += el.answer === el.correctAnswer ? 1 : 0;

      return sum;
    }, 0);

    return {
      points,
      maxPoints,
    }
  }

  reset() {
    this.answers = [];
  }
}
