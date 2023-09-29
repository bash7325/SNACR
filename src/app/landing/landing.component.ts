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

  login() {
    // Implement login logic here using AuthService or your chosen authentication method
    // Example: this.authService.login(this.email, this.password);
  }

  register() {
    // Implement sign-up logic here using AuthService or your chosen authentication method
    // Example: this.authService.register(this.signupEmail, this.signupPassword);
  }
}
