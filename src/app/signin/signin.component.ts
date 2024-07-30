import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    // Implement sign-in logic here
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
