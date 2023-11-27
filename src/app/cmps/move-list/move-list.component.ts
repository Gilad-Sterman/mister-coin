import { Component, Input } from '@angular/core';
import { User } from '../../services/user.model';
import { MoveModel } from '../../services/move.model';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrl: './move-list.component.scss'
})
export class MoveListComponent {
  @Input() moves!: MoveModel[]  
  @Input() title!: string  
}
