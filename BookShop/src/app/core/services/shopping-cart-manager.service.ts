import { Injectable } from '@angular/core';
import { IBook } from '../interfaces/book.interface';
import { IShoppingCartData } from '../interfaces/shopping-cart-data.interface';
import { SESSION_STORAGE_KEYS } from 'src/app/config/session-storage-keys';

@Injectable({
  providedIn: 'root'
})
export class ShopingCartManagerService {

  constructor() { }

  // Add the item to the session storage in array;
  private addItem(item: IShoppingCartData): void {

    const shoppingCart: string | null = sessionStorage.getItem(SESSION_STORAGE_KEYS.SHOPPING_CART);

    if (shoppingCart == null) {
      sessionStorage.setItem(SESSION_STORAGE_KEYS.SHOPPING_CART, JSON.stringify([item]));
    } else {
      const shoppingCartData: IShoppingCartData[] = JSON.parse(shoppingCart);
      shoppingCartData.push(item)
      sessionStorage.setItem(SESSION_STORAGE_KEYS.SHOPPING_CART, JSON.stringify(shoppingCartData));
    }
  }

  // Get all stored items in session and transfrom it to js array;
  getShopCart(): null | IShoppingCartData[] {
    const shoppingCart: string | null = sessionStorage.getItem(SESSION_STORAGE_KEYS.SHOPPING_CART);

    if (shoppingCart == null) {
      return null;
    } else {
      return JSON.parse(shoppingCart);
    }
  }

  // It takes Ibook and book id and transfrom it structure;
  transformAndAddToSession(item: IBook, id: string, quantity:number = 1): void {
    return this.addItem({
      title: item.title,
      author: item.author,
      price: item.price,
      discount: item.discount,
      image: item.image,
      id: id,
      quantity: quantity
    }
    )
  }
}
