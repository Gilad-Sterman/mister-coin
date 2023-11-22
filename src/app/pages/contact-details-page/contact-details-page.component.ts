import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../../services/contact.model';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrl: './contact-details-page.component.scss'
})
export class ContactDetailsPageComponent {
  @Input() contact!: Contact 
}
