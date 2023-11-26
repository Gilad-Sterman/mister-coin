import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../services/user.model';
import { Observable } from 'rxjs';
import { BitcoinService } from '../../services/bitcoin.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  userService = inject(UserService)
  bitcoinService = inject(BitcoinService)
  user!: User
  subscription!: Subscription
  rate = 0
  // users$!: Observable<User[]>

  ngOnInit(): void {
    this.userService.loggedInUser$
      .subscribe(user => {
        this.user = user
      })
    this.bitcoinService.getRate()
      .subscribe((res) => {
        this.rate = res
      })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe?.()
  }
}
