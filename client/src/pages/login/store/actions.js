import { STORE_USER, REMOVE_USER } form "./types";

export const setUser = () => {
    return {
        type: STORE_USER,
        payload: user
    }
}

export const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}