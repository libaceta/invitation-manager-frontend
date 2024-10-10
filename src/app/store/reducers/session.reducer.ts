import { createReducer, on } from "@ngrx/store";
import * as fromSessionActions from "../actions/session.action";
import { SessionState } from "..";

export const initialState: SessionState = {
    login: false,
    loading: false,
    username: '',
    email: '',
    token: ''
}

export const sessionReducer = createReducer(
    initialState,
    on(fromSessionActions.login, state => ({ ...state, loading: true })),
    on(fromSessionActions.loginSuccess, (state, action) => (
        {
            ...state,
            loading: false,
            login: action.res.ok,
            email: action.res.user.email,
            username: action.res.user.username,
            token: action.res.token

        }
    )),
    on(fromSessionActions.loginFail, state => ({ ...state, loading: false }))
);
  