import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { product, carrito } from '../../type/type';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [],
  template: `
  <div class="border border-black rounded bg-body-secondary" style="width: 150px; height: auto;">
    <div><i class="btn bi bi-bell"></i>|<i class="btn bi bi-cart-plus" (click)="onClicked()"></i> | <i class=" btn bi bi-moon-fill"></i></div>
  </div>
  `,
  styleUrl: './icons.component.css'
})
export class IconsComponent {
  constructor(private router: Router){}
  onClicked(){
    this.router.navigate(['/added-to-cart']);
  }

}
