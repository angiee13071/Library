import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { userService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { loginResult } from '../../app/interfaces/interfaces';



@Component({
  selector: 'login-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',


})
export class LoginComponent {
  _userService = inject(userService);
  username: string = '';
  password: string = '';
  text_error: string = '';
  error: boolean = false;
  results: loginResult | undefined;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    this.error = false;
    this.username = this.loginForm.value.username ? this.loginForm.value.username : '';
    this.password = this.loginForm.value.password ? this.loginForm.value.password : '';
    console.log(this.username, this.password);
    this._userService.loginService(this.username, this.password).subscribe((dataResponse: any) => {
      console.log('Respuesta del servicio login:', dataResponse);
      this.results = dataResponse;
    }, (error: any) => {
      this.error = true;
      this.text_error = error.error.detail;
      console.log(error);

    });

  }
}


