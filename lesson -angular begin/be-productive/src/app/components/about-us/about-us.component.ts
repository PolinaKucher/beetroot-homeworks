import { IPhotos } from './../../types/photos.type';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  photos: IPhotos[] = [
    {
      src: 'assets/images/man-1.jpg',
    },
    {
      src: 'assets/images/girl-1.jpg',
    },
    {
      src: 'assets/images/man-2.jpg',
    },
    {
      src: 'assets/images/man-3.jpg',
    },
    {
      src: 'assets/images/man-4.jpg',
    },
    {
      src: 'assets/images/girl-2.jpg',
    },
    {
      src: 'assets/images/girl-3.jpg',
    },
    {
      src: 'assets/images/man-5.jpg',
    },
  ];
}
