import { Injectable } from '@angular/core';
import { Product } from 'src/models/product';

@Injectable({
  providedIn: 'root' // This makes the service available throughout the application as a singleton.
})

export class ProductService {
  path = "./assets/images/";
  getProduct(): Product {
    return {
      company: "SNEAKERS COMPANY",
      name: "Fall Limited edition sneakers",
      description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
      price: 250.00,
      discount: 50,
      discountPrice: 125.00,
      imagePaths : [
        `${this.path}image-product-1.jpg`,
        `${this.path}image-product-2.jpg`,
        `${this.path}image-product-3.jpg`,
        `${this.path}image-product-4.jpg`,
      ]
    };
  }
}