export const counterReducer = (state: initialStateType = inicialstate, action: CounterActionsType): initialStateType => {
    switch (action.type) {
        case "CLICK":
            const copyState = {...state}
            if(copyState.counterValue < copyState.maxValue) {
                ++copyState.counterValue
            }
            return copyState
        case "RESET":
            return {...state, counterValue: state.startValue}
        case "CHANGE-START-VALUE":
            return {...state, startValue: action.newValue}
        case "CHANGE-MAX-VALUE":
            return {...state, maxValue: action.newValue}
        default: return state
    }
}

export const clickAC = () => ({type: "CLICK"} as const)
export const resetAC = () => ({type: "RESET"} as const)
export  const changeStartValueAC = (newValue: number) => ({type: "CHANGE-START-VALUE", newValue} as const)
export  const changeMaxValueAC = (newValue: number) => ({type: "CHANGE-MAX-VALUE", newValue} as const)

export type CounterActionsType =
    ReturnType<typeof clickAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof changeStartValueAC>
    | ReturnType<typeof changeMaxValueAC>

export type initialStateType = typeof inicialstate

const inicialstate = {
    counterValue: 0,
    startValue: 0,
    maxValue: 1
}