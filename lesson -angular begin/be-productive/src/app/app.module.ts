// *Base
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';

// *Components
import { NavigationComponent } from './components/navigation/navigation.component';
import { FeaturesComponent } from './components/features/features.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { FaqComponent } from './components/faq/faq.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    NavigationComponent,
    FeaturesComponent,
    ContactsComponent,
    AboutUsComponent,
    FooterComponent,
    BannerComponent,
    HeaderComponent,
    AppComponent,
    FaqComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    HttpClientModule,
    MatTooltipModule,
    GoogleMapsModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserModule,
    SwiperModule,
    FormsModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDObVTCs6Fil_VvxA3hxYsG-bGJjwg_mhA',
      language: 'en',
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
