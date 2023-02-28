import { INavListItem } from './../../types/navigation.types';
import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  navList: INavListItem[] = [
    {
      title: 'Home',
      link: '#banner',
    },
    {
      title: 'How it works',
      link: '#features',
    },
    {
      title: 'About us',
      link: '#about-us',
    },
    {
      title: 'FAQ',
      link: '#faq',
    },
    {
      title: 'Contacts',
      link: '#contacts',
    },
  ];

  constructor(private viewportScroller: ViewportScroller) {}
}
