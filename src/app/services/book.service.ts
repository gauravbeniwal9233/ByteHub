import { Injectable } from '@angular/core';
import { Book } from '../interfaces/books';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private Books: Book[] = [
    { id: 100, name: 'asdfasd', price: 4522, description: 'asdfsadff' },
    {
      id: 101,
      name: 'asdfdsfasd',
      price: 45422,
      description: 'asdfsagfgsdadfdf',
    },
    { id: 102, name: 'asdfsdfaasd', price: 452522, description: 'asdfadsadf' },
    {
      id: 103,
      name: 'asdfasdfsdfsdfasd',
      price: 47522,
      description: 'asfgddfsadf',
    },
    { id: 104, name: 'asdasfasd', price: 45022, description: 'ashjhkdfsadf' },
  ];

  constructor() {}

  BookList=of(this.Books);
  bookToDisplay=this.Books.concat({ id: 105, name: 'asdaaaaasfasd', price: 422, description: 'ashjhkdfdsdfsadf' })

  getbooks(): Observable<Book[]> {
    // return of(this.Books);
    return of(this.bookToDisplay);
  }

  getBooksByID(id: number): Observable<Book> {
    // return this.getbooks().pipe(map(books => books.find(book => book.id == id)));
    return this.BookList.pipe(map(books => books.find(book => book.id == id)));
  }
}
