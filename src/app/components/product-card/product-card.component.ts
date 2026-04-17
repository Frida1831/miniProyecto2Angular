import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product!: Product;

  @Output() add = new EventEmitter<Product>();

  addToCart() {
    this.add.emit(this.product);
  }
}
