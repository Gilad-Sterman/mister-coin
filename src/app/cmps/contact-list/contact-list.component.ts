import { Component, EventEmitter, Input, OnInit, Output, AfterViewInit } from '@angular/core';
import { Contact } from '../../services/contact.model';
import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent implements OnInit {
  @Input() contacts!: Contact[] | null
  // @Output() dragEvent = new EventEmitter()

  myContacts: Contact[] | null = null


  ngOnInit(): void {
    this.myContacts = this.contacts

  }
  drop(event: CdkDragDrop<string[]>) {
    // console.log(event)
    moveItemInArray(this.myContacts as Contact[], event.previousIndex, event.currentIndex);
  }
}
