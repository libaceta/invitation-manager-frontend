import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store';
import { Observable } from 'rxjs';

import * as fromStore from '../../../store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  events$: Observable<fromStore.EventsState> | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.events$ = this.store.select(fromStore.selectEvents);
    this.store.dispatch(fromStore.getEvents());
  }

}
