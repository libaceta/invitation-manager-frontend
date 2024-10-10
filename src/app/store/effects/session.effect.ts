import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../../home/services/auth.service";
import * as sessionActions from '../actions/session.action'
import { catchError, exhaustMap, map, of } from "rxjs";

@Injectable()
export class SessionEffects {

    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) {}

	logins$ = createEffect(() =>
        this.actions$.pipe(
        ofType(sessionActions.login),
        exhaustMap(session =>
            this.authService.login$().pipe(
                map(res => sessionActions.loginSuccess({ res })),
                catchError(error => of(sessionActions.loginFail({ error })))
            )
        )
        ),
        { useEffectsErrorHandler: false }
    );
    
}