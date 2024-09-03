import { AsyncPipe } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router,} from '@angular/router';
import { ApieCommerceService } from '../../service/apie-commerce.service';
import { product } from '../../type/type';
import { Observable } from 'rxjs';
import { ProductListComponent } from "../product-list/product-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, AsyncPipe, ProductListComponent],
  template: `
<h1 class="text-center">Lista de Productos</h1>
 @if (productsResult$ | async; as productList ) {
  <app-product-list [products]="productList"></app-product-list>
 }@else {
  <div class="text-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
}
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  public productsResult$!: Observable<product[]>
  constructor(private apiProduct: ApieCommerceService) {}

ngOnInit(){
  this.productsResult$ = this.apiProduct.getAll()
}

}