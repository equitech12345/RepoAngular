import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [],
  template: `
    <div class="row justify-content-start">
      <div
        class="border border-black rounded bg-body-secondary"
        style="width: 170px; height: auto;"
      >
        <div>
          <i class="btn bi bi-bell"></i>|<i
            class="btn bi bi-cart-plus position-relative"
            (click)="onClicked()"
          >
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              {{ totalItems }}
              <span class="visually-hidden">unread messages</span>
            </span></i
          >
          | <i class=" btn bi bi-moon-fill"></i>
        </div>
      </div>
    </div>
  `,
  styleUrl: './icons.component.css',
})
export class IconsComponent {
 totalItems: number = 4; 

  constructor(private router: Router) {}
  onClicked() {
    this.router.navigate(['/added-to-cart']);
  }
}
