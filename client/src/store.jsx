import { createStore, combineReducers } from "redux";

const store = combineReducers({
    userStore:  userReduser
})

export default createStore(store);