import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  
  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
  
  products: Product[] = [
    {
      id: 1,
      name: 'Latte Midnight',
      price: 65,
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
      category: 'bebida'
    },
    {
      id: 2,
      name: 'Frappé Mocha',
      price: 75,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
      category: 'bebida'
    },
    {
      id: 3,
      name: 'Croissant',
      price: 40,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff',
      category: 'comida'
    }
  ];

}
