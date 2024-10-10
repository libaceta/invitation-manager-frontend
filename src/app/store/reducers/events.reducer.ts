import { createReducer, on } from "@ngrx/store";
import * as eventsActions from "../actions/events.action";
import { EventsState } from "..";

export const initialState: EventsState = {
    loading: false,
    events: []
};

export const eventsReducer = createReducer(
    initialState,
    on(eventsActions.getEvents, state => ({ ...state, loading: true })),
    on(eventsActions.getEventsSuccess, (state, action) => (
        {
            ...state,
            loading: false,
            events: action.events
        }
    )),
    on(eventsActions.getEventsFail, state => ({ ...state, loading: false }))
);
  