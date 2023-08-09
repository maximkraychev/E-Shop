import { Component, Input } from '@angular/core';
import { IBook } from 'src/app/core/interfaces/book.interface';
import { ShopingCartManagerService } from 'src/app/core/services/shopping-cart-manager.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {

  @Input('book') data!: { id: string, book: IBook };

  constructor(private shopCartService: ShopingCartManagerService){}
   
  // TODO find a better way of implementation because using ShopingCartManagerService directly will couplee to much this component;
  // When Add to cart is click will add the book to session storage;
  addToCart(book: IBook, id: string): void {
    this.shopCartService.transformAndAddToSession(book, id);
  }
}
