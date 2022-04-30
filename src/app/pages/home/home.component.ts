import { Component, OnInit } from '@angular/core';
import { Article, Resultmain } from 'src/app/interfaces/interfaces';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsApi: Article[] = [];
  textSearch: string = '';

  constructor(private service: NewsApiService) { }

  ngOnInit(): void {
    this.service.getDataNews()
      .subscribe(resp => {
        console.log(resp.articles)
        this.newsApi = resp.articles;


      })



  }

  onClickSearch() {
    console.log("Click en buscar:" + this.textSearch);
    this.service.searchDataNews(this.textSearch)
      .subscribe(resp => {
        console.log(resp.articles);
      })

  }

}
