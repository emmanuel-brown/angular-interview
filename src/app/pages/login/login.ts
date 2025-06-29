import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { UserService } from '../../DI/userService';
import { Router } from '@angular/router';

export interface NoteI {
  id: string;
  content: string;
}

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.sass'
})
export class Login {
  userService = inject(UserService)
  router = inject(Router)

  loginForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
  })

  ngAfterViewInit() {
    if(this.userService.isLoggedIn()) {
      this.router.navigate(['/profile'])
    }
  }

  onSubmit(e: Event) {
    e.preventDefault()
    if (!this.loginForm.valid) {
      console.error('Form is invalid')
      return
    }
    const { firstName, lastName } = this.loginForm.value;
    if (!firstName || !lastName) {
      console.error("First name or last name is missing");
      return;
    }
    
    this.userService.login(firstName, lastName)
      .subscribe({
        next: () => {
          console.log('Login successful');
          this.router.navigate(['/profile']);
        },
        error: (error) => {
          console.error('Login failed:', error);
        }
      })
  }
}
