import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegistrationModalService {
  constructor(public dialog: MatDialog) {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    import(
      '../components/registration-modal/registration-modal.component'
    ).then((component) => {
      this.dialog.open(component.default, {
        width: '100%',
        enterAnimationDuration,
        exitAnimationDuration,
      });
    });
  }

  openLastDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    import('../components/download-modal/download-modal.component').then(
      (component) => {
        this.dialog.open(component.default, {
          width: '100%',
          enterAnimationDuration,
          exitAnimationDuration,
        });
      }
    );
  }
}
