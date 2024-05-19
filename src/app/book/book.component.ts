import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../interfaces/books';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  myAllBooks?: Book[];
  

  constructor(
    private _bookService:BookService
  ) {}

  ngOnInit(){
    this.getAllBooks();
  }

  getAllBooks() {
    this._bookService.getbooks().subscribe(res=>this.myAllBooks=res);
  }

}
