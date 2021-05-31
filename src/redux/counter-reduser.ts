export type CounterActionsType =
    ReturnType<typeof clickAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof changeStartValueAC>
    | ReturnType<typeof changeMaxValueAC>

export type CounterType = {
    counter: number
    startValue: number
    maxValue: number
}

const inicialstate: CounterType = {
    counter: 0,
    startValue: 0,
    maxValue: 1
}

export const counterReducer = (state = inicialstate, action: CounterActionsType): CounterType => {
    switch (action.type) {
        case "CLICK":
            const copyState = {...state}
            if(copyState.counter < copyState.maxValue) {
                copyState.counter++
            }
            return copyState
        case "RESET":
            return {...state, counter: state.startValue}
        case "CHANGE-START-VALUE":
            return {...state, startValue: action.newValue}
        case "CHANGE-MAX-VALUE":
            return {...state, maxValue: action.newValue}
        default:
            return state
    }
}

export const clickAC = () => {
    return {type: "CLICK"} as const
}
export const resetAC = () => {
    return {type: "RESET"} as const
}
export  const changeStartValueAC = (newValue: number) => {
    return {type: "CHANGE-START-VALUE", newValue} as const
}
export  const changeMaxValueAC = (newValue: number) => {
    return {type: "CHANGE-MAX-VALUE", newValue} as const
}