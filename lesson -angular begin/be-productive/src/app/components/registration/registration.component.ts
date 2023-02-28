import { RegistrationModalService } from './../../shared/registration-modal.service';
// *Base
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { InputTypes } from './../../types/input.types';
import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, inject } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-registration',
  imports: [FormsModule, ReactiveFormsModule, MatDialogModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [RegistrationService],
})
export class RegistrationComponent {
  InputTypes = InputTypes;
  form!: FormGroup;
  active: boolean = false;

  @Output() closeForm = new EventEmitter<boolean>();

  private readonly dialog = inject(MatDialog);
  private readonly fb = inject(FormBuilder);
  public modal = inject(RegistrationModalService);
  private readonly registrationService = inject(RegistrationService);

  constructor() {
    this.initForm();
  }

  // *Form initialization
  private initForm() {
    this.form = this.fb.group({
      role: [1],
      firstName: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      lastName: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      username: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^(?=.*d).{4,}$'),
          Validators.maxLength(8),
        ]),
      ],
      disabledSeasonAnimation: [false],
      language: ['en'],
    });
  }

  // *Submit event
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.registrationService.registration(this.form.value).subscribe({
        next: (response) => {
          console.log(response);
          this.dialog.closeAll();
          this.modal.openLastDialog('400ms', '500ms');
        },
        error: (errorResponse) => {
          console.log(errorResponse);
          this.dialog.closeAll();
          this.modal.openLastDialog('400ms', '500ms');
        },
      });
    }
  }

  // * Helpers for view
  isControlValid(controlName: string) {
    const control = this.form.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string) {
    const control = this.form.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }
}
