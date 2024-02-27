import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  selectedImages: unknown[] | undefined;
  productService: any;
// onImageSelect($event: Event) {
// throw new Error('Method not implemented.');
// }

  onImageSelect(event: any) {
    // Allow multiple image selection
    this.selectedImages = Array.from(event.target.files);
  }
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

      // ...other product attributes
    });
  }
  onSubmit() {
    console.log(this.productForm.value);
    fetch('http://localhost:3000/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(this.productForm.value)
})
.then(res => res.json())
.then(console.log);

  }
  // onSubmit() {
  //   if (this.productForm.valid) {
  //     const formData = this.productForm.value;

  //     // Assuming you have a backend API endpoint to save the product data
  //     // You can use Angular's HttpClient to make an HTTP request to your backend
  //     // For demonstration purposes, let's assume you have a ProductService with a saveProduct method

  //     this.productService.saveProduct(formData).subscribe(
  //       (response: any) => {
  //         console.log('Product saved successfully:', response);
  //         // Optionally, you can reset the form after successful submission
  //         this.productForm.reset();
  //       },
  //       (error: any) => {
  //         console.error('Error saving product:', error);
  //         // Handle error cases, such as displaying an error message to the user
  //       }
  //     );
  //   } else {
  //     // If the form is invalid, mark all fields as touched to display validation errors
  //     this.productForm.markAllAsTouched();
  //   }
  // }



  }
  interface IProduct {
    name: string;
    description: string;
    price: number;
    quantity: number;
    // ...other product attributes
    image?: string; // Optional image URL for future implementation
  }
