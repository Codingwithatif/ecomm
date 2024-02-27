import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit{
onAddtoCart(product: any) {

  fetch('http://localhost:3000/cartProduct', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  })
}
productForm: any;





products: any[] = [] ;
  router: any;

constructor() {}

ngOnInit() {
  // Retrieve product data from central storage (e.g., service, array)
  fetch('http://localhost:3000/products')
.then(response => response.json())
.then(data => {
  this.products = data;
console.log(this.products);

})

}
navigateToAddProduct() {
  this.router.navigate(['/add-product']);
}
}



// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent implements OnInit {
//   products: { name: string; description: string; price: number; ... }[] = [];

//   constructor() {}

//   ngOnInit() {
//     // Retrieve product data from central storage (e.g., service, array)
//     this.products = [...(sessionStorage.getItem('products') ? JSON.parse(sessionStorage.getItem('products')!) : [])];
//   }
// }
