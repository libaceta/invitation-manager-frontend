import { createAction, props } from "@ngrx/store";
import { EventModel } from "../../dashboard/models/event.model";

export const getEvents = createAction('[EVENTS] Get Events');
export const getEventsSuccess = createAction('[EVENTS] Get Events Success', props<{events: EventModel[]}>());
export const getEventsFail = createAction('[EVENTS] Get Events Fail', props<{error: any}>());