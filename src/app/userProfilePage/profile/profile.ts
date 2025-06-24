import { Component, inject } from '@angular/core';
import { UserService } from '../../DI/userService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.sass'
})
export class Profile {
  // user$: Observable<UserI | null>;

  // constructor(private userService: UserService) {
  //   // this.user$ = this.userService.user$
  //   // this.user.getUser();
  // }

  userService = inject(UserService);
  user$ = this.userService.user$;

  ngOnInit() {
    this.userService.getUser();
  }
}
