import { Component, inject } from '@angular/core';
import { Footer } from '../footer/footer';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../DI/userService';

@Component({
  selector: 'app-main-layout',
  imports: [Footer, RouterOutlet, RouterLink, CommonModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.sass'
})
export class MainLayout {
  userService = inject(UserService)
}
