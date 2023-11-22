import { Component, OnInit, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Subscription } from 'rxjs';
import { ContactFilter } from '../../services/contact.model';


@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrl: './contact-filter.component.scss'
})
export class ContactFilterComponent implements OnInit {
  contactService = inject(ContactService)
  subscription!: Subscription

  filterBy!: ContactFilter

  ngOnInit(): void {
    this.subscription = this.contactService.filterBy$
      .subscribe(filterBy => {
        this.filterBy = filterBy
      })
  }

  onSetFilter(val: string) {
    // this.filterSubject$.next(val)
    this.contactService.setFilterBy(this.filterBy)
}


ngOnDestroy(): void {
    this.subscription?.unsubscribe?.()
}
}
