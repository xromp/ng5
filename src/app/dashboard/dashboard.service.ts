import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

import { Post } from './post';

@Injectable()
export class DashboardService {
  readonly API_URL = 'https://jsonplaceholder.typicode.com/';

  constructor(private http:HttpClient) { }

  cars = [
    'Ford','Chevy','BMW'
  ];

  getCars(){
    return this.cars;
  }

  getResults(e) {
    let params = new HttpParams()
      .set("pageSize",e.pageSize)
      .append("userId",e.pageIndex);
    
      return this.http.get(this.API_URL+'posts',{params})
      .retry(3)
      .catch(err => {
        console.log(err);
        return Observable.of(err);
      });
  }
  
}
