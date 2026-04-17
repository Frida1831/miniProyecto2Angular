import { Component } from '@angular/core';
import { CartService } from '../../services/cart';
import { Product } from '../../models/product';
import { OrderService } from '../../services/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items: Product[] = [];

  constructor(
  private cartService: CartService,
  private orderService: OrderService,
  private router: Router
) {
  this.items = this.cartService.getCart();
}

  remove(index: number) {
    this.cartService.removeFromCart(index);
  }

  checkout() {
  if (this.items.length > 0) {
    this.orderService.addOrder(this.items);
    this.items.length = 0; // vacía carrito
    this.router.navigate(['/history']);
  }
}
}
