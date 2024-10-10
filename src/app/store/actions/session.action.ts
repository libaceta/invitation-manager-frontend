import { createAction, props } from "@ngrx/store";
import { LoginResponseModel } from "../../home/models/login-response.model";

export const login = createAction('[SESSION] Login');
export const loginSuccess = createAction('[SESSION] Login Success', props<{res: LoginResponseModel}>());
export const loginFail = createAction('[SESSION] Login Fail', props<{error: any}>());