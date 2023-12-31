import { Component, OnDestroy, OnInit } from '@angular/core';
import { IShoppingCartData } from 'src/app/core/interfaces/shopping-cart-data.interface';
import { ShopingCartManagerService } from 'src/app/core/services/shopping-cart-manager.service';
import { SESSION_STORAGE_KEYS } from 'src/app/config/session-storage-keys'
import { Router } from '@angular/router';
import { UserStateService } from 'src/app/core/services/user-state.service';
import { ErrorPopupService } from 'src/app/core/services/error-popup.service';
import { take } from 'rxjs';
import { FinalizeOrderService } from './finalize-order.service';

@Component({
  selector: 'app-card',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css'],
  providers: [FinalizeOrderService]
})
export class CardComponent implements OnDestroy, OnInit {

  books: IShoppingCartData[] = [];

  totalPrice: number = 0;
  discount: number = 0;
  totalPriceAfterDiscount: number = 0;

  //  Handle purchase-btn status when clicked disable the button;
  //  And enable again based on logic in component;
  purchaseBtnLoadingStatus: boolean = false;

  constructor(
    private shoppingCartService: ShopingCartManagerService,
    private router: Router,
    private userStateService: UserStateService,
    private errorService: ErrorPopupService,
    private finalizeOrderService: FinalizeOrderService
  ) {


    // Load books from session store and if its not null save it in component;
    const sessionData = this.shoppingCartService.getShopCart();

    if (sessionData != null) {

      // Check for dublicate and remove them;
      const setOfBooks = new Set<string>

      //  If there are dublicate save the last added; 
      //  It need to start from the end thats why we dont use for of;
      for (let index: number = sessionData.length - 1; index >= 0; index--) {
        if (!setOfBooks.has(sessionData[index].id)) {
          this.books.push(sessionData[index]);
          setOfBooks.add(sessionData[index].id);
        }
      }
    }
  }

  ngOnInit(): void {
    this.calculateTotal();
  }

  // Clear the previus calculation(if there is) and recalculate again;
  calculateTotal(): void {
    this.totalPrice = 0;
    this.discount = 0;
    this.totalPriceAfterDiscount = 0;

    if (this.books != null) {

      this.books.forEach(book => {
        this.totalPrice += book.price * book.quantity;
        this.discount += (book.price * (book.discount / 100)) * book.quantity;
      });

      this.totalPriceAfterDiscount = this.totalPrice - this.discount;
    }
  }

  // Chnage on quantity of item and recalculate;
  onQuantityChange(event: Event, id: string): void {
    const chnageQuantity: number = Number((event.target as HTMLInputElement).value);
    const book = this.books.find((x) => x.id == id);

    if (book) {
      book.quantity = chnageQuantity;
      this.calculateTotal();
    }
  }

  // It removes item and recalculate;
  onItemRemove(id: string) {
    const index = this.books.findIndex((x) => x.id == id);

    if (index >= 0) {
      this.books.splice(index, 1);
      this.calculateTotal();
    }
  }


  onPurchase() {

    if (this.purchaseBtnLoadingStatus) {
      // If the button status is loading true don't execute more orders until the first one is finish
      return
    }

    this.purchaseBtnLoadingStatus = true;

    this.userStateService.user$.pipe(take(1)).subscribe({
      next: (userStatus) => {
        if (userStatus == null) {
          this.errorService.pushErrorMsg('Oops! You must be a registered user to make a purchase.');
          this.router.navigate(['/user/login']);
          return;
        }

        // Take only needed property for order
        const dataForOrder = this.books.map(x => { 
          return {
            title: x.title, 
            id: x.id, 
            quantity: x.quantity, 
            price: Number((x.price * (1 - x.discount / 100)).toFixed(2))  // return number of discounted price fixed to 2 or less;
          }
        }); 

        this.finalizeOrderService.finalizeOrder(dataForOrder, this.totalPriceAfterDiscount)
          .then(() => {
            this.books = []; // ng on destroy will take care of the rest;
            this.router.navigate(['/thank-you']);
          })
          .catch((err) => {
            this.errorService.pushErrorMsg(err.messageor);
            this.purchaseBtnLoadingStatus = true;
          });

      },
      error: (err) => {
        console.error(err);
        this.errorService.pushErrorMsg(err.message);
        this.purchaseBtnLoadingStatus = true;
      }
    })
  }

  // On destroy save the local changes to the session store;
  ngOnDestroy(): void {
    if (this.books == null || this.books.length <= 0) {
      sessionStorage.removeItem(SESSION_STORAGE_KEYS.SHOPPING_CART);
    } else {
      sessionStorage.setItem(SESSION_STORAGE_KEYS.SHOPPING_CART, JSON.stringify(this.books));
    }
  }
}
