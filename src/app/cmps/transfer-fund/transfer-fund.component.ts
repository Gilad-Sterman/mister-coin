import { Component, Input, inject } from '@angular/core';
import { Contact } from '../../services/contact.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrl: './transfer-fund.component.scss'
})
export class TransferFundComponent {

  @Input() contact!: Contact
  @Input() maxCoins!: number

  userService = inject(UserService)
  amount = 0
  onTransfer() {
    this.userService.addMove(this.contact as Contact, this.amount)
    this.amount = 0 
  }
}
