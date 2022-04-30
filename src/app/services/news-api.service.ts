import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article, Resultmain } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http: HttpClient) { }

  getDataNews() {
    return this.http.get<Resultmain>('https://newsapi.org/v2/everything?q=Bitcoin&from=2022-04-28&sortBy=popularity&apiKey=8729d357f35840c09b4997dfc346511a');
  }
  searchDataNews(text: string) {
    return this.http.get<Resultmain>(`https://newsapi.org/v2/everything?q=${text}&from=2022-04-28&sortBy=popularity&apiKey=8729d357f35840c09b4997dfc346511a`);
  }

}
