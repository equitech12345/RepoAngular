import { Component, Input } from '@angular/core';
import { product } from '../../type/type'; 
import { ProductCategoryComponent } from '../product-category/product-category.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCategoryComponent],
  template: `
    <div class="container">
      <div class="row m-4">
       <app-product-category [products]="products"></app-product-category>
      </div>
    </div>
  `,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: product[] | null = [];

}
