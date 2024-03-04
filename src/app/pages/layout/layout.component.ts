import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

import Swal from 'sweetalert2';
import { SearchComponent } from "../search/search.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    imports: [RouterOutlet, RouterLink, CommonModule, SearchComponent]
})
export class LayoutComponent {
isSellerLoggedIn: any;



  constructor(private router: Router) {


  }
  onLogoutClicked() {
    Swal.fire({
      title: "Do you want to Logout?",
      showDenyButton: true,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        localStorage.removeItem('user');
        const user = localStorage.getItem('user');

        if(!user) {
          this.router.navigate(['/login']);
        }
        Swal.fire("Loged out!", "success");
      }
    });

  }

  onAddtoCart(product: any) {

    fetch('http://localhost:3000/cartProduct', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
  }
  productForm: any;

  products: any[] = [] ;




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







