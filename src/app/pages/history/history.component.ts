import { Component } from '@angular/core';
import { OrderService } from '../../services/order';
import { Product } from '../../models/product';

@Component({
  selector: 'app-history',
  standalone: true,
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {

  orders: Product[][] = [];

  constructor(private orderService: OrderService) {
    this.orders = this.orderService.getOrders();
  }
}
