import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { MatPaginator, MatTableDataSource, PageEvent} from '@angular/material';


import 'rxjs/Rx';
import { Post } from './post';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,AfterViewInit {

  post$:Observable<Post[]>;
  answer: string = '';
  answerDisplay: string = '';
  showSpinner: boolean = false;
  results:Post[];
  newResults:any;
  title:string;
  selectedRowIndex:number = -1;

  displayedColumns = [];
  dataSource = new MatTableDataSource<Post>();
  user:any[];

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  readonly API_URL = 'https://jsonplaceholder.typicode.com/';

  constructor(private http:HttpClient, private _dashboardService:DashboardService) { 

  }

  ngOnInit() {
    
    // console.log(this.results);
  }

  onPaginateChange(e){
    console.log(e);

    this._dashboardService.getResults(e)
    // .map(res => this.results = res)
    .subscribe(res => {
      this.results = res;

      this.displayedColumns = ['userId','title','body'];
      this.dataSource = new MatTableDataSource<Post>(this.results);
      // this.dataSource.paginator = this.paginator;
      this.user = [{'userId':1}];
    });
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
  
  showAnswer() {
    this.showSpinner = true;
    let params = new HttpParams()
      .set('userId','1')
      // .append('id','1');

      
      // this.results = this.http.get(this.API_URL+'posts',{params});

    setTimeout(() => {
      this.answerDisplay = this.answer;
      this.showSpinner = false;
    }, 2000);
  }

  createResult(){
    const data:Post = {
      userId:1,
      id:null,
      title:"modified"
    };
    
    // this._dashboardService.getResults().subscribe(res => this.newResults = res);
    // this.newResults = this.http.post<Post>(this.API_URL+'foo',data)
    //   .retry(3)
    //   .catch(err => {
    //     console.log(err);
    //     return Observable.of(err);
    //   });

      // .map(res => this.title = res.title)
  }

  selectRow(e){
    console.log(e);
    e.title = "rom";
    this.selectedRowIndex = e.id;
  }
}
 