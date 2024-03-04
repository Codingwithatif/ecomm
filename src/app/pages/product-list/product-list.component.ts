import { CartService } from './../../cart.service';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../product.service';
@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit{

    products: any[] = [];

    constructor(
      private route: ActivatedRoute,
      private productService: ProductService,
     private CartService: CartService// Inject CartService
    ) { }

    ngOnInit(): void {
      this.route.params.subscribe(params => {
        const category = params['category'];
        this.products = this.productService.getProductsByCategory(category);
console.log(this.products);

      });
    }

    addToCart(product: { name: string, category: string }): void {
      this.CartService.addToCart(product); // Call addToCart method from CartService

 }
  }
