import { Component, Input } from '@angular/core';
import { carrito, product } from '../../type/type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-category',
  standalone: true,
  imports: [],
  template: `
  <div class="container">
    <div class="row justify-content-center row-cols-auto g-4">
        @for(product of products; track product.id; let $i = $index;) {
         <div class="text-center">
           <div class="card" style="width: 14rem; height:22rem;">
             <div class="text-center">
               <img src={{product.image}} class="text-center rounded card-img-top" style="width: 150px; height: 150px;">
              </div>
              <div class="card-body">
                <h5 class="card-title" id="product_name" (click)="onProductClicked(product.id)">{{product.name}}</h5>
                <div class="text-center">Tamaño: <strong>{{product.quantity}}</strong></div>
                <div class="text-center text-danger">$ {{product.price}}</div>
              </div>
              <div class="card-footer">
                <button type="button" class="btn btn-warning mx-4" (click)="onProductToAdd(product)">Agregar <span class="badge text-bg-light">{{clicked[$i+1]}}</span></button>
              </div>
            </div>
          </div>
        }
    </div>    
  </div>
  `,
  styleUrl: './product-category.component.css'
})
export class ProductCategoryComponent {
clicked: number[] = [];
@Input() products: product[] | null = [];
@Input() category: string = '';

constructor(private router: Router){}

onProductClicked(id: string | undefined){
  this.router.navigate(['/product-detail', id]);
}

  onProductToAdd(product: product){
    this.clicked[parseInt(product.id)] = this.clicked[parseInt(product.id)] + 1 || 1;
    // console.log(parseInt(product.id));
    let productToAdd: carrito = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    }

    if(localStorage.getItem('carrito') === null){
    let carrito: carrito[] = [];
    carrito.push(productToAdd);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    }else{
      let carritoStorage = localStorage.getItem('carrito') as string;
      let carritoParse = JSON.parse(carritoStorage);
      let index = carritoParse.findIndex((element: carrito) => element.name === productToAdd.name);
      if(index !== -1){
        carritoParse[index].quantity += 1;
        localStorage.setItem('carrito', JSON.stringify(carritoParse));
      }else{
        carritoParse.push(productToAdd);
        localStorage.setItem('carrito', JSON.stringify(carritoParse));
      }
    }

  }
}
