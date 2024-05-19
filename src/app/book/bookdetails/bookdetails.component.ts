import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../interfaces/books';

@Component({
  selector: 'app-bookdetails',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './bookdetails.component.html',
  styleUrl: './bookdetails.component.scss'
})
export class BookdetailsComponent {

  myAllBooks?: Book[];
  bookDetails: Book;
  

  constructor(
    private _route: ActivatedRoute,
    private _bookService: BookService,
    private _location: Location,
  ) {}

  ngOnInit() {
    this.getAllBooks();
    // 1. route.snapshot.param
    // alert(this._route.snapshot.params['id']);

    // this._bookService.getBooksByID(this._route.snapshot.params['id']).subscribe(res=>{
    //   this.bookDetails=res;
    // })


    // 2. route.snapshot.paramMap

    // this._bookService.getBooksByID(parseInt (this._route.snapshot.paramMap.get('id'))).subscribe(res=>{
    //   this.bookDetails=res;
    // })

    // 3. route.param.subscribe

    // this._route.params.subscribe(res=> {
    //   // alert(res['id']);
    //   this._bookService.getBooksByID(res['id']).subscribe(res=>{
    //     this.bookDetails=res;
    //   })
    // })

    // 4. route.paramMap.subscribe

    this._route.paramMap.subscribe(res=>{
      // alert(res.get('id'));

      this._bookService.getBooksByID(parseInt(res.get('id'))).subscribe(res=>{
        this.bookDetails=res;
      })
    })
  }

  goBack() {
    this._location.back();
  }

  getAllBooks() {
    this._bookService.getbooks().subscribe(res=>this.myAllBooks=res);
  }

}
