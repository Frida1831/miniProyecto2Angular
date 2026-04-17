import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orders: Product[][] = [];

  addOrder(products: Product[]) {
    this.orders.push([...products]); // copia
  }

  getOrders() {
    return this.orders;
  }
}