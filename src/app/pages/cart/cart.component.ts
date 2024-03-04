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

cartProduct: any;

ngOnInit(): void {

this.getAllCartProds();

}

removeFromCart(id: any) {
  fetch(`http://localhost:3000/cartProduct/${id}` ,{
    method: 'DELETE',
  })
  .then(res => {
  this.getAllCartProds();

  })
}

private getAllCartProds() {
  fetch('http://localhost:3000/cartProduct')
  .then(response => response.json())
  .then(data => {
    this.cartProduct = data;
  console.log(this.cartProduct);

  })
}
}
