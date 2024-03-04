import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {
  products: any;
  ngOnInit(): void {
    fetch('http://localhost:3000/products')
    .then(resp => resp.json())
    .then(data => {
      this.products = data
      console.log(this.products);

    })
  }
  categories: string[] = [
    'Groceries & Pets',
    'Health & Beauty',
    'Men\'s Fashion',
    'Women\'s Fashion',
    'Mother & Baby',
    'Home & Lifestyle',
    'Electronic Devices',
    'Electronic Accessories',
    'TV & Home Appliances',
    'Sports & Outdoor',
    'Watches, Bags & Jewellery',
    'Automotive & Motorbike'
  ];
}
