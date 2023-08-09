import { Injectable } from '@angular/core';
import { IBook } from '../interfaces/book.interface';
import { IShoppingCartData } from '../interfaces/shopping-cart-data.interface';

@Injectable({
  providedIn: 'root'
})
export class ShopingCartManagerService {

  constructor() { }

  private addItem(item: IShoppingCartData): void {

    const shoppingCart: string | null = sessionStorage.getItem('shopping-cart');

    if (shoppingCart == null) {
      sessionStorage.setItem('shopping-cart', JSON.stringify([item]));
    } else {
      const shoppingCartData: IShoppingCartData[] = JSON.parse(shoppingCart);
      shoppingCartData.push(item)
      sessionStorage.setItem('shopping-cart', JSON.stringify(shoppingCartData));
    }
  }

  getShopCart(): null | IShoppingCartData[] {
    const shoppingCart: string | null = sessionStorage.getItem('shopping-cart');

    if (shoppingCart == null) {
      return null;
    } else {
      return JSON.parse(shoppingCart);
    }
  }

  transformAndAddToSession(item: IBook, id: string): void {
    return this.addItem({
      title: item.title,
      author: item.author,
      price: item.price,
      discount: item.discount,
      image: item.image,
      id: id
    }
    )
  }
}
