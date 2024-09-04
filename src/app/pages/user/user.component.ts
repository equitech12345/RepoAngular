import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  template: `
    <div class="row justify-content-end">
      <div
        class="text-center border border-black rounded bg-body-secondary"
        style="width: 250px;"
      >
        @if (user.length) {
        <h2>Bienvenido!!!!</h2>
        <p>
          <i class="bi bi-person-circle"></i> Usuario:
          <strong>{{ user }}</strong>
        </p>
        }@else {
        <p>Usuario no registrado, por favor iniciar secion por favor.</p>
        }
      </div>
    </div>
  `,
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() user: string = '';
}
