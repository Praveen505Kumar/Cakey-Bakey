import { ADMINROLE, USERROLE } from "./types";

const intialStatus = {
    role: -1,
};

const reducer = (state = intialStatus, action) => {
    switch (action.type) {
        case ADMINROLE:
            return {
                ...state, role: 1
            };
        case USERROLE:
            return {
                ...state, role: 0
            };
        default:
            return state;
    }
}

export default reducer;