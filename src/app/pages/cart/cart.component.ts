import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
removeFromCart(_t5: any) {
throw new Error('Method not implemented.');
}
ngOnInit(): void {


  fetch('http://localhost:3000/cartProduct')
  .then(response => response.json())
  .then(data => {
    this.cartProduct = data;
  console.log(this.cartProduct);

  })
}
cartProduct: any;
}
