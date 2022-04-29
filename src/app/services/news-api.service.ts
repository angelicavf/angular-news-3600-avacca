import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http: HttpClient) { }

  getDataNews() {
    return this.http.get('https://newsapi.org/v2/everything?q=Apple&from=2022-04-28&sortBy=popularity&apiKey=8729d357f35840c09b4997dfc346511a');
  }
}
