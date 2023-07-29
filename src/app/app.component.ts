import { Component } from '@angular/core';
import { Product } from 'src/models/product';
import { CartService } from 'src/services/CartService';
import { ProductService } from 'src/services/ProductService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title : string = 'e-commerce-product-page';
  isCartOpen : boolean = false;
  counterCount : number = 1;
  product! : Product;
  cart : Product[] = [];
  addedToCartProduct! : Product;
  selectedImagePath! : string;
  isSideMenuOpen : boolean = false;
  constructor (private productService: ProductService, private cartService: CartService) {};
  
  ngOnInit() {
    this.product = this.productService.getProduct();
    this.addedToCartProduct = this.productService.getProduct();
    this.cart = this.cartService.getCart();
    this.selectedImagePath = this.product.imagePaths[0]; // Image of zero index will be primal
  }

  counterPlus() : void{
    this.counterCount ++;
  }

  counterMinus() : void{
    if(this.counterCount > 1){
      this.counterCount --; 
    } 
  }

  openCloseCartWindow() : void{
    this.isCartOpen = !this.isCartOpen;
  }

  deleteFromCart() : void{
    this.cartService.deleteFromCart(this.cart[0]);
    this.addedToCartProduct = this.productService.getProduct(); // Update addedToCartProduct with the latest product
  }

  addToCart(): void {
    if (this.cart[0]) {
      this.deleteFromCart();
      this.addedToCartProduct = this.productService.getProduct(); // Update addedToCartProduct with the latest product
      return;
    }
  
    this.addedToCartProduct.discountPrice = this.addedToCartProduct.discountPrice! * this.counterCount;
    this.cartService.addToCart(this.addedToCartProduct);
  }

  changeImg(index : number) : void{
    this.selectedImagePath = this.product.imagePaths[index];
  }

  openCloseSideMenu() : void{
    this.isSideMenuOpen = !this.isSideMenuOpen;
  }
}
