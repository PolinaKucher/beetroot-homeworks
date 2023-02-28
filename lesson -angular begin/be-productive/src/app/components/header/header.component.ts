import { RegistrationModalService } from '../../shared/registration-modal.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public modal: RegistrationModalService) {}

  menuVar: boolean = false;
  burger: boolean = false;

  openMenu() {
    this.menuVar = !this.menuVar;
    this.burger = !this.burger;
  }

  closeMenu() {
    this.menuVar = false;
    this.burger = false;
  }

  openModal(): void {
    this.modal.openDialog('400ms', '500ms');
  }
}
