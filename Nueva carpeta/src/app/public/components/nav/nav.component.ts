import { Component } from '@angular/core';
import {Source} from "../../../news/model/source.entity";
import {Article} from "../../../news/model/article.entity";
import {NewsApiService} from "../../../news/services/news-api.service";
import {LogoApiService} from "../../../shared/services/logo-api.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  sources: Array<Source> = [];
  articles: Array<Article> =[];

  constructor(private newsApi: NewsApiService,
              private logoApi: LogoApiService) {
  }

  ngOnInit(): void {
    this.loadArticles();
    this.newsApi.getSources()
      .subscribe((data: any) => {
        this.sources = data['sources'];
        this.sources.forEach((source: { urlToLogo: string; }) =>
          source.urlToLogo = this.logoApi.getUrlToLogo(source));
        console.log(this.sources);
      })
  }

  loadArticles() {
    this.newsApi.getArticlesBySourceId('abc-news')
      .subscribe((data: any) => {
        this.articles = data['articles'];
  });
  }

  searchArticleForSource(source:any) {
    this.newsApi.getArticlesBySourceId(source.id)
      .subscribe((data: any) => {
        this.articles = data['articles'];
        this.articles.forEach((article: { source: {urlToLogo: any; url:any;};}) =>{
          article.source.urlToLogo = source.urlToLogo;
          article.source.url = source.url;
        });
      });
  }

  onSourceSelect(source: any) {
    this.searchArticleForSource(source);
  }

}

