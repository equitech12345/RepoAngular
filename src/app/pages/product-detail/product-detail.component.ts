import { Component, Input, inject} from '@angular/core';
import { ApieCommerceService } from '../../service/apie-commerce.service';
import { product } from '../../type/type';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [AsyncPipe],
  template: `
@let product = (productResult$ | async);
  <div class="row justify-content-center">
    <h1 class="text-center">Detalles del Producto</h1>
    <div class="card position-relative text-center" style="width: 44rem; height:49rem;" >
      <div class="position-relative start-0 end-0">
        <img src={{product?.image}} class="" style="width: 450px; height: 450px;">
      </div>
      <div class="text-start">
        <h4><strong>Producto:</strong> {{product?.name}}</h4>
        <h4><strong>Marca:</strong> {{product?.brand}}</h4>
        <h4><strong>Categoría:</strong> {{product?.category}}</h4>
        <h4><strong>Tamaño:</strong> {{product?.quantity}}</h4>
        <h4><strong>Precio:</strong> $ {{product?.price}}</h4>
        <h4><strong>Stock Disponible:</strong> {{product?.stock_quantity}}</h4>
        <h4><strong>Descripción:</strong> {{product?.description}}</h4>
      </div>
      <div class="container-fluid" (click)="onReturnClicked()">
        <button type="button" class="btn btn-warning w-20" >Volver</button>
      </div>
    </div>
  </div>
  `,
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  public productResult$!: Observable<product>
  private api: ApieCommerceService = inject(ApieCommerceService)
  @Input('id') id!: string

  ngOnInit(): void{
    this.productResult$ = this.api.getOne(this.id)
  }
  onReturnClicked(){
    window.history.back()
  }

}
