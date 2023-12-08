import { Component, inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../services/contact.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

  contactService = inject(ContactService)
  contacts$!: Observable<Contact[]>

  ngOnInit(): void {
    this.contacts$ = this.contactService.contacts$

  }

}
