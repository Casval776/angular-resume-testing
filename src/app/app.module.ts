import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { HomePageComponent } from './home-page/home-page.component';

import { appRoutes } from './router';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    CarouselComponent,
    ProfileComponent,
    AboutMeComponent,
    SocialMediaComponent,
    HomePageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
