export interface LoginResponseModel {
    ok: boolean;
    msg: string;
    user: UserModel;
    token: string;
}

export interface UserModel {
    username: string;
    email: string;
}