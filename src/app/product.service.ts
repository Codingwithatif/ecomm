import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {
  ngOnInit(): void {
    fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => {
      this.products = data;
    })
  }

  private products: any[] = [];


  constructor() { }

  getProductsByCategory(category: string): any[] {
    console.log(category);

    return this.products.filter(product => product.category == category);
  }
}
