import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'home', component: AppComponent, title: '', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, title: 'Login' },
    { path: '**', component: AppComponent, }

];
