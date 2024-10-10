import { Injectable } from "@angular/core";
import { LoginResponseModel } from "../models/login-response.model";
import { delay, Observable, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor() {}

    login$(): Observable<LoginResponseModel> {
        return of({ok: true, msg: 'login successfull', user: {username: 'pepe', email: 'asd@asd.com'}, token: 'asdasdasd'}).pipe(delay(2000));
    }
}