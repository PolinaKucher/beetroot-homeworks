import { IFaqCard } from './../../types/faq-card.types';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  panelOpenState = false;

  cards: IFaqCard[] = [
    {
      colorClass: 'green',
      text: 'We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media.',
      title: 'Privacy',
    },
    {
      colorClass: 'blue',
      text: 'If you lose your account, please contact our application support. We will do our best to help you.',
      title: 'Lost an account',
    },
    {
      colorClass: 'orange',
      text: 'Our application is absolutely free for all users.',
      title: 'Pricing',
    },
  ];
}
