import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss'
})
export class SignUpPageComponent {

  private router = inject(Router)
  private route = inject(ActivatedRoute)
  userService = inject(UserService)
  userName = ''

  onSignUp() {
    if (!this.userName) return
    this.userService.signUp(this.userName)
    this.router.navigateByUrl('')
  }
}
