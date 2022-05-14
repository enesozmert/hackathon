import { Injectable } from '@angular/core';
import { CartItem } from '../models/entities/cartItem';
import { CartItems } from '../models/entities/cartItems';
import { Product } from '../models/entities/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product: Product) {
    let item = CartItems.find(p => p.product.productId == product.productId);
    if (item) {
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CartItems.push(cartItem)
    }
  }
  list(): CartItem[] {
    return CartItems;
  }
  removeFromCart(product: Product) {
    let item:any = CartItems.find(c => c.product.productId === product.productId);
    CartItems.splice(CartItems.indexOf(item), 1);
  }
}
