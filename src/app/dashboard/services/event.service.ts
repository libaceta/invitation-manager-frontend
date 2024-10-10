import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { EventModel, EventStatus } from "../models/event.model";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class EventService {

    constructor(private http: HttpClient) {}

    getEvents$(): Observable<{ok: boolean, msg: string, events: EventModel[]}> {
        // return of({ok: true, msg: 'events loaded', events: [{id: 1, name: 'Evento 1', description: '', date: new Date(), status: EventStatus.PENDING}]}).pipe(delay(2000));
        return this.http.get<{ok: boolean, msg: string, events: EventModel[]}>(environment.apiUrl + '/events');
    }
}