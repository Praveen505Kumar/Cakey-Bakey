import { ADMINROLE, USERROLE } from "./types";

export const setUserRole = () => {
    return {
        type: USERROLE
    };
};

export const setAdminRole = () => {
    return {
        type: ADMINROLE
    };
};