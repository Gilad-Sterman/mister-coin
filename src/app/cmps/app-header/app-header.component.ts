import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../services/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent implements OnInit {

  private router = inject(Router)
  private route = inject(ActivatedRoute)
  userService = inject(UserService)
  subscription!: Subscription
  loggedInUser!: User

  ngOnInit(): void {
    this.subscription = this.userService.loggedInUser$
      .subscribe(user => {
        this.loggedInUser = user
      })
  }
  onLogOut() {
    this.userService.logOut()
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe?.()
  }
}
