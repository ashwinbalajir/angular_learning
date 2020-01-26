import { Component, OnInit } from '@angular/core';

import { Book } from "app/models/book";
import { Reader } from "app/models/reader";
import {LoggerService} from 'app/services/logger.service';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  allBooks: Book[] ;
  allReaders: Reader[] ;
  mostPopularBook: Book;
  private _loggerService:LoggerService;
  constructor(loggerService:LoggerService,private dataService:DataService) {
    this._loggerService=loggerService;
    this._loggerService.log('created');
   }

  ngOnInit() {
    this.allBooks=this.dataService.getAllBooks();
    this.allReaders=this.dataService.getAllReader();
    this.mostPopularBook=this.dataService.mostPopularBook;


  }

  deleteBook(bookID: number): void {
    console.warn(`Delete book not yet implemented (bookID: ${bookID}).`);
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }

}
