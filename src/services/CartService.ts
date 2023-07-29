import { Injectable } from "@angular/core";
import { Product } from "src/models/product";

// cart.service.ts
@Injectable({
    providedIn: 'root'
  })
  export class CartService {
    private cartItems: Product[] = [];
  
    constructor() { }
  
    addToCart(product: Product): void {
      this.cartItems.push(product);
    }

    deleteFromCart(product: Product): void {
      const index = this.cartItems.indexOf(product);

      if (index !== -1) {
        this.cartItems.splice(index, 1);
      }
    }

    getCart(): Product[] {
        return this.cartItems;
    }
  }
  