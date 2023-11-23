import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../../services/contact.model';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent {
  @Input() contacts!: Contact[] | null

  // selectedContact: Contact | null = null

  // onSetSelectedContact(contact: Contact | null) {
  //   this.selectedContact = contact
  // }

}
