import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsService } from './details.service';
import { IBook } from 'src/app/core/interfaces/book.interface';
import { ErrorPopupService } from 'src/app/core/services/error-popup.service';
import { Subscription } from 'rxjs';
import { ShopingCartManagerService } from 'src/app/core/services/shopping-cart-manager.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  private bookId: string;
  bookData: IBook | undefined;
  quantity: number = 1;
  bookSub!: Subscription;

  constructor(
    private activeRoute: ActivatedRoute,
    private detailService: DetailsService,
    private errorService: ErrorPopupService,
    private router: Router,
    private shoppingCartService: ShopingCartManagerService
  ) {
    this.bookId = this.activeRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.bookSub = this.detailService.getBook(this.bookId).subscribe({
      next: (book) => {
        this.bookData = book;
        if (this.bookData == undefined) {
          this.errorService.pushErrorMsg('Oops! The requested item could not be found.');
          this.router.navigate(['/catalog']);
        }
      },
      error: (err: Error) => {
        this.errorService.pushErrorMsg(err.message);
        console.error(err);
        this.router.navigate(['/catalog']);
      }
    });
  }

  // Add book to the session storage;
  addItem() {
    if(this.bookData) {
      this.shoppingCartService.transformAndAddToSession(this.bookData, this.bookId, this.quantity);
    } else {
      // This error should not be activated because we check for book at the component init (if there is no book it redirect to catalog);
      this.errorService.pushErrorMsg('Oops! The book you\'re looking for is either not loaded yet or doesn\'t exist.');
    }
  }

  // Add book to the session storage and then navigate to shopping-cart;
  buyItem() {
    this.addItem();
    this.router.navigate(['/shopping-cart']);
  }

  plusQuantity() {
    if (this.quantity >= 100) {
      return
    }
    this.quantity++;
  }

  minusQuantity() {
    if (this.quantity <= 1) {
      return;
    }
    this.quantity--;
  }

  ngOnDestroy(): void {
    this.bookSub.unsubscribe();
  }
}
