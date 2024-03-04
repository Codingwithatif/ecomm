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
import { SellerComponent } from './pages/seller/seller.component';
import { CategoryComponent } from './pages/category/category.component';
import { SearchComponent } from './pages/search/search.component';
// import { CartComponent } from './cart/cart.component';


export const routes: Routes = [


  // { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'categories', component: CategoryComponent },
  { path: 'products/:category', component: ProductListComponent },
  //what

    {
        path: '', redirectTo: 'home' , pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
      path: 'search',
      component: SearchComponent

    },

    {
        path: 'register',
        component: RegisterComponent
    },

    {
        path: 'add-product',
        component: AddProductComponent,
        canActivate: [AuthGuard],

      },
    {
      path: 'product-list/:category',
      component: ProductListComponent,

    },

    {
      path: 'seller',
      component: SellerComponent,

    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'category',
      component: CategoryComponent,
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
