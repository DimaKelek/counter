import React, {createContext, useContext} from "react";
import {createMobXStore, StoreWithMobXType} from "./StoreWithMobX";
import {useLocalStore} from "mobx-react";

const storeContext = createContext<StoreWithMobXType | null>(null)

export const useMobXStore = () => {
    const store = useContext(storeContext)
    if (!store) {
        throw new Error('useStore must be used within a StoreProvider.')
    }
    return store
}

export const StoreProvider: React.FC = ({ children }) => {
    const store = useLocalStore(createMobXStore)
    return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}