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
  loading: Boolean = false;
  loading_pages: Boolean = false;

  constructor(private service: NewsApiService) { }

  ngOnInit(): void {

    this.service.getDataNews()
      .subscribe(resp => {
        console.log(resp.articles)
        this.newsApi = resp.articles;


      })
    setTimeout(() => {

      this.loading_pages = true;

    }, 1800)
  }
  onClickSearch() {
    this.loading = true;
    this.newsApi = [];
    console.log("Click en buscar:" + this.textSearch);
    setTimeout(() => {
      this.service.searchDataNews(this.textSearch)
        .subscribe(resp => {
          this.loading = false;
          console.log(resp.articles);
          if (this.newsApi = []) {
            this.newsApi = resp.articles;

          } else {
            this.newsApi = [];
          }
          this.newsApi = resp.articles;
        })

    }, 3000)

  }

  homeLoading() {

  }

}
