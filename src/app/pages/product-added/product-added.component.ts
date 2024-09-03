import { Component } from '@angular/core';

@Component({
  selector: 'app-product-added',
  standalone: true,
  imports: [],
  template: `
    <table class="table table-striped">
      <tbody class="">
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>mdo</td>
          <td>$150</td>
          <td></td>
        </tr>
      </tbody>
    </table>

  `,
  styleUrl: './product-added.component.css'
})
export class ProductAddedComponent {

}
