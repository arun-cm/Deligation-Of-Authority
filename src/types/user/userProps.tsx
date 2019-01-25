export default interface UsersProps {
    users: any /// IUser[]
}

export interface UserDispatches {
    user: any
}

export interface UserProps {
    user: IUser;
}

export interface IUser {
    id: number,
    name: string,
    role: string
}