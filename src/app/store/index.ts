import { EventModel } from '../dashboard/models/event.model';

export * from './actions/session.action';
export * from './actions/events.action';
export * from './effects/session.effect';
export * from './effects/events.effect';

export interface SessionState {
    login: boolean,
    loading: boolean;
    username: string;
    email: string;
    token: string;
}

export interface EventsState {
    loading: boolean;
    events: EventModel[];
}

export interface AppState {
    session: SessionState,
    events: EventsState
}

export const selectSession = (state: AppState) => state.session;
export const selectEvents = (state: AppState) => state.events;