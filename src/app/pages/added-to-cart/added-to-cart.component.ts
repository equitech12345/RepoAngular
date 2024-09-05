import { Component } from '@angular/core';
import { carrito } from '../../type/type';

@Component({
  selector: 'app-added-to-cart',
  standalone: true,
  imports: [],
  template: `
  <div class="container">
  <table class="table caption-top">
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Producto</th>
      <th scope="col">Precio</th>
      <th scope="col">Cantidad</th>
      <th scope="col">SubTotal</th>
    </tr>
  </thead>
  <tbody>
  @for(product of listaProductToAdd; track product.id;) {
    <tr>
      <th scope="row">1</th>
      <td>{{product.name }}</td>
      <td>{{product.price.toFixed(2)}}</td>
      <td>{{product.quantity}}</td>
      <td>{{(product.price * product.quantity).toFixed(2)}} </td>
    </tr>
  }
  <tr>

    <td colspan="4" class="text-end"><strong>Total</strong></td>
    <td>{{total.toFixed(2)}}</td>
  </tr>
  </tbody>
</table>
<div class="container">
  <div class="text-center">
    <button class="btn btn-danger" (click)="vaciarCarrito()"> Vaciar Carrito</button>
    <button class="btn btn btn-warning mx-5" (click)="onReturnClicked()">Volver</button>
    <button class="btn btn-success"> Pagar</button>
  </div>  
</div>
  </div>
  `,
  styleUrl: './added-to-cart.component.css'
})
export class AddedToCartComponent {
  totalItems: number = 0;
  total: number = 0;
  listaProductToAdd: carrito[] | undefined;

  ngOnInit(): void {
    let carrito = localStorage.getItem('carrito') as string;
    this.listaProductToAdd = JSON.parse(carrito);
    for (let i = 0; i < this.listaProductToAdd!.length; i++) {
      this.total += this.listaProductToAdd![i].price * this.listaProductToAdd![i].quantity;
      this.totalItems += this.listaProductToAdd![i].quantity;
    }
  }

  vaciarCarrito() {
    localStorage.clear();
    this.listaProductToAdd = [];
    this.total = 0;
    this.totalItems = 0;
  }

  onReturnClicked() {
    window.history.back();
  }
}
