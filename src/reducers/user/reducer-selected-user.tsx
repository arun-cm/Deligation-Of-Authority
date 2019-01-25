export default function (state: any = null, action: any) {
    switch (action.type) {
        case "USER_SELECTED":
            return action.payload;
        default:
            return state;
    }
}