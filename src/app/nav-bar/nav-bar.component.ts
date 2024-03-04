import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SearchComponent } from "../pages/search/search.component";

@Component({
    selector: 'nav-bar',
    standalone: true,
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.scss',
    imports: [RouterLink, CommonModule,SearchComponent, SearchComponent]
})
export class NavBarComponent {
onLogoutClicked() {
throw new Error('Method not implemented.');
}
isSellerLoggedIn: any;

}
