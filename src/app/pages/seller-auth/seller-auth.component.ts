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
//sdjkf

// formgroup: FormGroup;

// constructor(private http: HttpClient,private Router: Router,private FormBuilder : FormBuilder){
//   this.formgroup = this.FormBuilder.group({
//     email: ['eve.holt@reqres.in'],
//     password: ['cityslicka']
//   })

// }
// onLogin(data: ILogin) {
//   this.http.post('https://reqres.in/api/login', data).subscribe((res:any)=>{
//     if(res.token){
//       Swal.fire({
//         title: "Good job!",
//         text: "You clicked the button!",
//         icon: "success"
//       });
//       this.Router.navigate(['/add-product'])
//     }
//     else{
//       alert('failed!')
//     }
//   })
// }

// }

// export interface ILogin {
//   email: string;
//   password: string;

// }
}
