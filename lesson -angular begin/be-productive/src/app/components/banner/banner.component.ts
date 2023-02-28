import { RegistrationModalService } from '../../shared/registration-modal.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  providers: [RegistrationModalService],
})
export class BannerComponent {
  constructor(public modal: RegistrationModalService) {}
  openModal(): void {
    this.modal.openDialog('400ms', '500ms');
  }
}
