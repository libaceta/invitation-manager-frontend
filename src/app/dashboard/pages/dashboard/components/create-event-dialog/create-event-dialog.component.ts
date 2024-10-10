import { Component, EventEmitter, inject, model, Output } from '@angular/core';
import { EventModel } from '../../../../models/event.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-event-dialog',
  templateUrl: './create-event-dialog.component.html',
  styleUrl: './create-event-dialog.component.scss'
})
export class CreateEventDialogComponent {
  readonly dialogRef = inject(MatDialogRef<CreateEventDialogComponent>);

  @Output() event: EventEmitter<EventModel> = new EventEmitter();

  createEventForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    date: new FormControl(new Date(), Validators.required),
  });

  cancel(): void {
    console.log('cancel');
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.createEventForm.valid) {
      const event = {
        name: this.createEventForm.get('name')?.value ?? '',
        description: this.createEventForm.get('description')?.value ?? '',
        date: this.createEventForm.get('date')?.value ?? new Date()
      }
      this.event.emit(event);
    }
    this.dialogRef.close();
  }

}
