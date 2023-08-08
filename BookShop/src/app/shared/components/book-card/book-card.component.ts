import { Component, Input } from '@angular/core';
import { IBook } from 'src/app/core/interfaces/book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {

  @Input('book') data!: { id: string, book: IBook };
   
}
