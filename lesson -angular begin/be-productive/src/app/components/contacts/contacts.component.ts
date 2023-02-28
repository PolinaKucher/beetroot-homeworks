import { RegistrationModalService } from '../../shared/registration-modal.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  constructor(public modal: RegistrationModalService) {}
  openModal(): void {
    this.modal.openDialog('400ms', '500ms');
  }
}
