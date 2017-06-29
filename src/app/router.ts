import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'blog', component: BlogHomeComponent }
]