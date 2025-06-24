import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NoteI } from '../../login/login';

@Component({
  selector: 'app-note-component',
  imports: [],
  templateUrl: './note-component.html',
  styleUrl: './note-component.sass'
})
export class NoteComponent {
  @Input() note!: NoteI
  @Input() remove!: (id: string) => void

  handleRemove() {
    this.remove(this.note.id)
  }
}
