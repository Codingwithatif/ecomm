import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent  implements OnInit {
  selectedImages: unknown[] | undefined;
  productService: any;

  productForm: any;
  constructor(private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      brand: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      discountPercentage: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      rating: ['', Validators.required],
      stock: ['', Validators.required],
      thumbnail: ['', Validators.required],
     title: ['', Validators.required],

    });
  }

  categories: [] = []
  ngOnInit(): void {
    fetch('http://localhost:3000/categories')
    .then(resp => resp.json())
    .then(data => {
      this.categories = data
    })

  }
  onSubmit() {
    console.log(this.productForm.value);
    fetch('http://localhost:3000/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(this.productForm.value)
})
.then(res => res.json())
}
}
  interface IProduct {
    name: string;
    description: string;
    price: number;
    quantity: number;

    image?: string; // Optional image URL for future implementation
  }
