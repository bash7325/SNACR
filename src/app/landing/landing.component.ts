import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  email: string = '';
  password: string = '';
  signupEmail: string = '';
  signupPassword: string = '';
  confirmEmail: string = '';
  confirmPassword: string = '';
  isLoginForm: boolean = true; // Initially set to true for login form

  toggleForm() {
    this.isLoginForm = !this.isLoginForm;
  }

  login() {
    // Implement login logic here using AuthService or your chosen authentication method
  }

  register() {
    // Implement sign-up logic here using AuthService or your chosen authentication method
  }
}
