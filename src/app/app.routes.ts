import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { NotFuntionComponent } from './pages/not-funtion/not-funtion.component';
import { AddedToCartComponent } from './pages/added-to-cart/added-to-cart.component';

export const routes: Routes = [
{path: 'home', title: 'Home', component: HomeComponent},
{path: 'contact', title: 'Contact', component: ContactComponent},
{path: 'product-detail/:id', title: 'Product Detail', component: ProductDetailComponent},
{path: 'added-to-cart', title: 'Cart', component: AddedToCartComponent},
{path: '**', title: 'Not Funtion', component: NotFuntionComponent}
];
