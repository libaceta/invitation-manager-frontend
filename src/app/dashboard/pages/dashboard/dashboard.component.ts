import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store';
import { Observable, take } from 'rxjs';
import {
  MatDialog,
} from '@angular/material/dialog';

import * as fromStore from '../../../store';
import { CreateEventDialogComponent } from './components/create-event-dialog/create-event-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  readonly dialog = inject(MatDialog);

  events$: Observable<fromStore.EventsState> | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.events$ = this.store.select(fromStore.selectEvents);
    this.store.dispatch(fromStore.getEvents());
  }

  createEvent(): void {
    const dialogRef = this.dialog.open(CreateEventDialogComponent, {});

    dialogRef.componentInstance.event.pipe(take(1)).subscribe(event => {
      console.log('The dialog was closed: ', event);
    });
  }

}
