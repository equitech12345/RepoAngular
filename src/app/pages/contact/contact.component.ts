import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
  <div class="container mt-5 ">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card">
        <div class="card-header">
          <h4>Formulario de Contacto</h4>
        </div>
        <div class="card-body">
          <form [formGroup]="contactForm" (submit)="onSubmit()">
            <div class="mb-3">
              <label for="fullName" class="form-label">Nombre Completo</label>
              <input type="text" id="fullName" class="form-control" formControlName="fullName" placeholder="Ingrese su nombre completo">
              @if (contactForm.get('fullName')?.invalid && contactForm.get('fullName')?.touched) {
              <div class="text-danger">
                El nombre completo es requerido.
              </div>
              }
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Correo Electrónico</label>
              <input type="email" id="email" class="form-control" formControlName="email" placeholder="Ingrese su correo electrónico">
              @if (contactForm.get('email')?.invalid && contactForm.get('email')?.touched) {
              <div class="text-danger">
                Proporcione un email válido.
              </div>
              }
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Número de Teléfono (Opcional)</label>
              <input type="tel" id="phone" class="form-control" formControlName="phone" placeholder="Ingrese su número de teléfono">
            </div>
            <div class="mb-3">
              <label for="subject" class="form-label">Asunto</label>
              <input type="text" id="subject" class="form-control" formControlName="subject" placeholder="Ingrese el asunto">
              @if (contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched) {
              <div class="text-danger">
                El asunto es requerido.
              </div>
              }
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Mensaje</label>
              <textarea id="message" class="form-control" rows="4" formControlName="message" placeholder="Escriba su mensaje aquí"></textarea>
              @if (contactForm.get('message')?.invalid && contactForm.get('message')?.touched) {
              <div class="text-danger">
                El mensaje es requerido.
              </div>
              }
            </div>
            <div class="mb-3">
              <label for="queryType" class="form-label">Tipo de Consulta</label>
              <select id="queryType" class="form-select" formControlName="queryType">
                <option value="" disabled selected>Seleccione un tipo de consulta</option>
                <option value="soporte">Soporte</option>
                <option value="ventas">Ventas</option>
                <option value="reembolso">Reembolso</option>
                <option value="otro">Otro</option>
              </select>
              @if (contactForm.get('queryType')?.invalid && contactForm.get('queryType')?.touched) {
              <div class="text-danger">
                Seleccione un tipo de consulta.
              </div>
              }
            </div>
            <div class="mb-3">
              <label for="attachment" class="form-label">Adjuntar Archivo (Opcional)</label>
              <input type="file" id="attachment" class="form-control" formControlName="attachment">
            </div>
            <button type="submit" class="btn btn-primary w-20" [disabled]="contactForm.invalid">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

`,

  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      queryType: ['', Validators.required],
      attachment: ['']
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulario enviado:', this.contactForm.value);
    }
  }
}
