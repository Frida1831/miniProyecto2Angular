import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getCart() {
    return this.items;
  }

  removeFromCart(index: number) {
    this.items.splice(index, 1);
  }
}
