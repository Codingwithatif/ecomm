import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
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

}
