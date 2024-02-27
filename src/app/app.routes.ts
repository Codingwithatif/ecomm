import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { SellerAuthComponent } from './pages/seller-auth/seller-auth.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { AuthGuard } from './pages/authGuard';
import { CartComponent } from './pages/cart/cart.component';
// import { CartComponent } from './cart/cart.component';


export const routes: Routes = [

    {
        path: '', redirectTo: 'home' , pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'register',
        component: RegisterComponent
    },

    {
        path: 'add-product',
        component: AddProductComponent,

      },
    {
      path: 'product-list',
      component: ProductListComponent,

    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'cart',
      component: CartComponent,
    },
{
    path: 'home',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children:[{
      path: 'dashboard',
      component: DashboardComponent
    }
]
}
];
