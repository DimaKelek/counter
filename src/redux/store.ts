import {combineReducers, createStore } from "redux";
import {counterReducer} from "./counter-reduser";
import {loadState, saveState } from "./utils/localstorage";

const rootReducer = combineReducers({counter: counterReducer})

export type CounterStoreType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})