import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NoteI } from '../login/login';
import { NoteComponent } from './note-component/note-component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../DI/userService';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-notes',
  imports: [ReactiveFormsModule, NoteComponent, CommonModule],
  templateUrl: './notes.html',
  styleUrl: './notes.sass'
})
export class Notes {
  notes = signal<NoteI[]>([])
  userService = inject(UserService)
  user$ = this.userService.user$;
  
  ngOnInit() {
    this.userService.getUser();
  }

  noteForm = new FormGroup({
    note: new FormControl('', [Validators.minLength(3)]),
  })


  addNote(e: Event) {
    e.preventDefault()
    const noteControl = this.noteForm.get('note')
    const noteValue = noteControl?.value
    if (!noteValue || !noteControl) {
      console.error("Note control is invalid or not found");
      return;
    }
    this.notes.update(notes => [...notes, {id: crypto.randomUUID(), content: noteValue}])
    noteControl.setValue('')
  }

  remNote(id: string) {
    this.notes.update(notes => notes.filter(note => note.id !== id))
  }
}
