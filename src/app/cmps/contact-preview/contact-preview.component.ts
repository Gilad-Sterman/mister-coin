import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../../services/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrl: './contact-preview.component.scss'
})
export class ContactPreviewComponent {
  @Input() contact!: Contact 
}
