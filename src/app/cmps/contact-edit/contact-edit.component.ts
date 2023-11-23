import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../services/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil, Subject, filter, map, switchMap } from 'rxjs';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrl: './contact-edit.component.scss'
})
export class ContactEditComponent implements OnInit, OnDestroy {

  private contactService = inject(ContactService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)
  defaultUrl = 'https://res.cloudinary.com/dollaguij/image/upload/v1700645562/contact_dmhdby.png'
  destroySubject$ = new Subject<void>()

  contact = this.contactService.getEmptyContact()

  ngOnInit(): void {
    this.route.params.pipe(
      takeUntil(this.destroySubject$),
      map(params => params['id']),
      filter(id => id),
      switchMap(id => this.contactService.getContactById(id))
    ).subscribe(contact => {
      this.contact = contact
    })
  }

  onSaveContact() {
    this.contactService.saveContact(this.contact as Contact)
      .pipe(takeUntil(this.destroySubject$),)
      .subscribe({
        next: this.onBack,
        error: err => console.log('err:', err)
      })
  }

  onBack = () => {
    this.router.navigateByUrl('/contact')
  }

  ngOnDestroy(): void {
    this.destroySubject$.next()
  }
}
