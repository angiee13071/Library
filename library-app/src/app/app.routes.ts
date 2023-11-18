import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: AppComponent, title: '' },
    { path: 'login', component: LoginComponent, title: 'Login' }

];
