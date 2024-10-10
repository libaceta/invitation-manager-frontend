import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { EventModel, EventStatus } from "../models/event.model";

@Injectable({ providedIn: 'root' })
export class EventService {

    constructor() {}

    getEvents$(): Observable<{ok: boolean, msg: string, events: EventModel[]}> {
        return of({ok: true, msg: 'events loaded', events: [{id: 1, name: 'Evento 1', description: '', date: new Date(), status: EventStatus.PENDING}]}).pipe(delay(2000));
    }
}