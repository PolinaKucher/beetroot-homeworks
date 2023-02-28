import { RegistrationComponent } from '../registration/registration.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-registration-modal',
  imports: [MatDialogModule, RegistrationComponent, CommonModule],
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.scss'],
})
export default class RegistrationModalComponent {


  active: boolean = false;

  subscribe() {
    this.active = !this.active;
  }
}
