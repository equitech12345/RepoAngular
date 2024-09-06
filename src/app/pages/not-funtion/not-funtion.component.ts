import { Component } from '@angular/core';

@Component({
  selector: 'app-not-funtion',
  standalone: true,
  imports: [],
  template: `
<div class="container">
  <div class="alert alert-danger text-center mt-5" role="alert">
    <h4 class="alert-heading">Not Functioning</h4>
    <p>There is an issue with the current operation. Please try again later.</p>
    <hr>
    <div class="container-fluid" (click)="onReturnClicked()">
        <button type="button" class="btn btn-warning w-20" >Volver</button>
    </div>
  </div>
</div>
  `,
  styleUrl: './not-funtion.component.css'
})
export class NotFuntionComponent {
  onReturnClicked(){
    window.history.back()
  }

}
