//Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

//Component Imports
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

//Model Imports
import { appRoutes } from './router';

//Service Imports
import { UserService } from './user-service.service';
import { ApiService } from './api-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    CarouselComponent,
    ProfileComponent,
    AboutMeComponent,
    SocialMediaComponent,
    HomePageComponent,
    LoginComponent,
    BlogHomeComponent,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
