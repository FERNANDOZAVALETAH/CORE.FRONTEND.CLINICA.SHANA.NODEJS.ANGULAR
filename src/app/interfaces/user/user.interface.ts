export interface IUserLoginRequest {
    email: string
    password: string
}

export interface IUserLoginResponse {
    data: {
        token: string
    }
    message: string
    operation: string
}

export interface IUser {
    email: string
    userName: string
    firstName: string
    lastName: string
    role: string[]
}

export interface IUserResponse {
    data: IFindUser
    message: string
    operation: string
}

export interface IFindUser {
    idUser: string
    firstName: string
    lastName: string
}