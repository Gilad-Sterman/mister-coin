import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../services/user.model';
import { Observable } from 'rxjs';
import { BitcoinService } from '../../services/bitcoin.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  userService = inject(UserService)
  bitcoinService = inject(BitcoinService)
  user!: User
  rate = 0
  // users$!: Observable<User[]>

  ngOnInit(): void {
    this.user = this.userService.getUser()
    this.bitcoinService.getRate()
      .subscribe((res) => {
        this.rate = res
      })
  }
}
