import { routes } from './../../app.routes';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-seller',
  standalone: true,
  imports: [HttpClientModule,FormsModule,ReactiveFormsModule],
  templateUrl: './seller.component.html',
  styleUrl: './seller.component.scss'
})
export class SellerComponent {
  formgroup: FormGroup;

 constructor(private http: HttpClient, private router:Router, private FormBuilder: FormBuilder){
  this.formgroup = this.FormBuilder.group({
    email: ['eve.holt@reqres.in'],
    password: ['cityslicka']
  })
 }
onLogin(data: ILogin) {
  this.http.post('https://reqres.in/api/login', data).subscribe((res: any) => {
    if (res.token) {

    localStorage.setItem('user', res.token);
      this.router.navigate(['/add-product'])
      Swal.fire({
        title: 'Login Successful!',
        icon: 'success',

      });
    }


      })
}

}


export interface ILogin {
  email: string;
  password: string;

}
