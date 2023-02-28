import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  standalone: true,
  selector: 'app-download-modal',
  templateUrl: './download-modal.component.html',
  imports: [MatDialogModule, CommonModule],

  styleUrls: ['./download-modal.component.scss'],
})
export default class DownloadModalComponent {}
