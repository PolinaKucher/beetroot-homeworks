import { ISocials } from './../../types/socials.types';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  lat = 37.76938682871913;
  lng = -122.43901124992408;
  zoom: number = 12;
  socials: ISocials[] = [
    {
      link: 'https://uk-ua.facebook.com/',
      svgClass: 'icon icon-facebook socials__icon',
      svgHref: '#icon-facebook',
    },
    {
      link: 'https://www.youtube.com/',
      svgClass: 'icon icon-youtube socials__icon',
      svgHref: '#icon-youtube',
    },
    {
      link: 'https://www.behance.net/',
      svgClass: 'icon icon-behance socials__icon',
      svgHref: '#icon-behance',
    },
    {
      link: 'https://www.reddit.com/',
      svgClass: 'icon icon-reddit socials__icon',
      svgHref: '#icon-reddit',
    },
    {
      link: '"https://www.instagram.com/',
      svgClass: 'icon icon-inst socials__icon',
      svgHref: '#icon-inst',
    },
  ];
}
