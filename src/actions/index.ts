// import user props. use instead of any inside parameter
import IAction from '../types/_types/action'

const selectedUser = (user: any): IAction => {
    console.log('select user is ', user.name);
    return {
        type: "USER_SELECTED",
        payload: user
    }
}
export default selectedUser;