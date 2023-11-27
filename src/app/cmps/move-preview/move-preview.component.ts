import { Component, Input } from '@angular/core';

@Component({
  selector: 'move-preview',
  templateUrl: './move-preview.component.html',
  styleUrl: './move-preview.component.scss'
})
export class MovePreviewComponent {
  @Input() to!: string
  @Input() at!: number
  @Input() amount!: number
}
