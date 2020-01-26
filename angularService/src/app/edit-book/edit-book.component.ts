import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from 'app/models/book';
import { allBooks } from 'app/data';
import { DataService } from '../services/data.service';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styles: []
})
export class EditBookComponent implements OnInit {

  selectedBook: Book;

  constructor(private route: ActivatedRoute,private dataService:DataService,private loggerService:LoggerService) { }

  ngOnInit() {
    let bookID: number = parseInt(this.route.snapshot.params['id']);
    this.selectedBook = this.dataService.getAllBooksById(bookID);
  }

  setMostPopular(): void {
    this.dataService.setMostPopularBook(this.selectedBook);
    this.loggerService.log(this.selectedBook.title);
    // console.warn('Setting most popular book not yet implemented.');
  }

  saveChanges(): void {
    console.warn('Save changes to book not yet implemented.');
  }
}
