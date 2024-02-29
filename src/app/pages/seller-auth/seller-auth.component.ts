import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule,HttpClientModule, ReactiveFormsModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.scss'
})
export class SellerAuthComponent {
}
