import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formgroup : FormGroup
  constructor( private http: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    this.formgroup = this.formBuilder.group({
      email: ['eve.holt@reqres.in'],
      password: ['cityslicka']
    })
  }
 onLogin(data: ILogin) {
    this.http.post('https://reqres.in/api/login', data).subscribe((res: any) => {
      if (res.token) {

      localStorage.setItem('user', res.token);
        this.router.navigate(['/home/dashboard'])
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
