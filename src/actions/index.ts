// import user props. use instead of any inside parameter
import IAction from '../types/_types/action'

const selectedUser = (user: any): IAction => {
    console.log(' from selecteduser action', user);
    return {
        type: "USER_SELECTED",
        payload: user
    }
};
export default selectedUser;

/// USE ENUM for sort order.

export const nextUsers = (currentPage: number, sortColumn: string, sortOrder: string): IAction => {
    console.log(' next users : ', currentPage);

    return {
        type: "NEXT_USERS",
        payload: {
            currentPage,
            sortColumn,
            sortOrder
        }

    }
};

