import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class SearchService {
  apiRoot:string = 'https://itunes.apple.com/search';
  results:Object[];
  loading:boolean;

  constructor(private http:HttpClient) { 
    this.results = [];
    this.loading = false;
  }

  search(term:string) {
  }

}
