import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { IconsComponent } from './pages/icons/icons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    RouterLink,
    RouterLinkActive,
    UserComponent,
    IconsComponent,
  ],
  template: `
    <main class="main bg-image">
      <div class="container-fluid">
        <div class="row align-items-center mx-2">
          <div class="col-3 col-sm-4">
            <app-icons></app-icons>
          </div>
          <div class="col-3 col-sm-4">
            <h1 class="text-center text-color-black">
              Supermercado <br>UTN-2024 
            </h1>
            <div class="container text-center">
              <header>
                <ul class="nav justify-content-center">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      routerLink="/contact"
                      routerLinkActive="activeButton"
                      >Contact</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      routerLink="/home"
                      routerLinkActive="activeButton"
                      >Home</a
                    >
                  </li>
                </ul>
              </header>
            </div>
          </div>
          <div class="col-3 col-sm-4">
            <app-user user="Juan Balladarez"></app-user>
          </div>
        </div>
      </div>
      <div class="container">
        <hr class="border-bottom border-1" />
      </div>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'eCommerce2024';
}
