import { RegistrationModalService } from '../../shared/registration-modal.service';
import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, {
  Autoplay,
  Keyboard,
  Mousewheel,
  SwiperOptions,
} from 'swiper';
SwiperCore.use([Autoplay, Keyboard, Mousewheel]);

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FeaturesComponent {
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    mousewheel: {
      invert: false,
    },

    breakpoints: {
      1320: {
        loop: false,
        enabled: false,
        slidesPerView: 'auto',
        spaceBetween: 50,
      },
      320: {
        spaceBetween: 20,
        loop: true,
        enabled: true,
        slidesPerView: 2,
      },
    },
  };

  encapsulation = ViewEncapsulation.None;

  constructor(public modal: RegistrationModalService) {}
  openModal(): void {
    this.modal.openDialog('400ms', '500ms');
  }
}
