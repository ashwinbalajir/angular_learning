import { Injectable } from '@angular/core';
import {allReaders,allBooks} from 'app/data';
import {LoggerService} from 'app/core/logger.service';
import {Reader} from 'app/models/reader';
import {Book} from 'app/models/book';


@Injectable()
export class DataService {

  constructor(private loggerService:LoggerService) { }
  mostPopularBook:Book=allBooks[0];
  setMostPopularBook(book:Book):void{
    this.mostPopularBook=book;
  } 
  getAllReader():Reader[]{
    return allReaders;
  }
  getAllReaderById(id):Reader{
    return allReaders.find(reader=>reader.readerID===id);
  }
  getAllBooks():Book[]{
    return allBooks;
  }
  getAllBooksById(id):Book{
    return allBooks.find(book=>book.bookID===id);
  }

}
