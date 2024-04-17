import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apikey ="7dd4442ad84642768511a09c74f5ff5b"
  baseUrl = "https://newsapi.org/v2"

  constructor(private http: HttpClient) { }

  getSources(){
    return this.http.get(`${this.baseUrl}/sources?apikey=${this.apikey}`);
  }

  getArticlesBySourceId(sourceId: string) {
    return this.http.get(`${this.baseUrl}/top-headlines?sources=${sourceId}&apikey=${this.apikey}`)
  }

}
