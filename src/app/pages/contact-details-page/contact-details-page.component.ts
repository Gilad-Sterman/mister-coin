import { Component, inject, OnDestroy, OnInit, Output } from '@angular/core';
import { Contact } from '../../services/contact.model';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil, Subject, map, switchMap } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrl: './contact-details-page.component.scss'
})
export class ContactDetailsPageComponent implements OnInit, OnDestroy {
  // @Input() contact!: Contact

  private contactService = inject(ContactService)
  private userService = inject(UserService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)
  destroySubject$ = new Subject<void>()

  contact: Contact | null = null

  ngOnInit(): void {
    this.route.params.pipe(
      takeUntil(this.destroySubject$),
      map(params => params['id']),
      switchMap(id => this.contactService.getContactById(id))
    ).subscribe(contact => {
      this.contact = contact
    })
  }

  onBack = () => {
    this.router.navigateByUrl('/contact')
  }

  ngOnDestroy(): void {
    this.destroySubject$.next()
  }

  onTransfer(amount: number) {
    this.userService.addMove(this.contact as Contact, amount)
  }
}
