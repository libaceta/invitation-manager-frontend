import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as eventsActions from '../actions/events.action'
import { catchError, exhaustMap, map, of } from "rxjs";
import { EventService } from "../../dashboard/services/event.service";

@Injectable()
export class EventsEffects {

    constructor(
        private actions$: Actions,
        private eventService: EventService
    ) {}

	logins$ = createEffect(() =>
        this.actions$.pipe(
        ofType(eventsActions.getEvents),
        exhaustMap(events =>
            this.eventService.getEvents$().pipe(
                map(res => eventsActions.getEventsSuccess({ events: res.events })),
                catchError(error => of(eventsActions.getEventsFail({ error })))
            )
        )
        ),
        { useEffectsErrorHandler: false }
    );
    
}