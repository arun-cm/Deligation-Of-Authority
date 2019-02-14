export default interface UsersProps {
    users: IUser[]
}

export interface UserDispatches {
    selectedUser: any,
    nextUsers: any
}

export interface UserProps {
    user: IUser;
}

export interface IUser {
    id: number,
    name: string,
    email: string,
    active: boolean,

}