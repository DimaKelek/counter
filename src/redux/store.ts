import {combineReducers, createStore } from "redux";
import {counterReducer} from "./counter-reduser";

const rootReducer = combineReducers({counter: counterReducer})

export type CounterStoreType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)