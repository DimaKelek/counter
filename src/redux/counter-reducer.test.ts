import {
    changeMaxValueAC,
    changeStartValueAC,
    clickAC,
    CounterActionsType,
    counterReducer,
    CounterType,
    resetAC
} from "./counter-reduser";

test("counter value should be changed", () => {
    const startState: CounterType = {
        counter: 0,
        startValue: 0,
        maxValue: 1
    }

    const action: CounterActionsType = clickAC()
    const endState = counterReducer(startState, action)

    expect(endState.counter).toBe(1)
})
test("counter value should be reset to startValue", () => {
    const startState: CounterType = {
        counter: 7,
        startValue: 5,
        maxValue: 10
    }

    const action: CounterActionsType = resetAC()
    const endState = counterReducer(startState, action)

    expect(endState.counter).toBe(5)
})
test("startValue should be changed", () => {
    const startState: CounterType = {
        counter: 0,
        startValue: 0,
        maxValue: 1
    }

    const action: CounterActionsType = changeStartValueAC(1)
    const endState = counterReducer(startState, action)

    expect(endState.startValue).toBe(1)
})
test("maxValue should be changed", () => {
    const startState: CounterType = {
        counter: 7,
        startValue: 5,
        maxValue: 10
    }

    const action: CounterActionsType = changeMaxValueAC(11)
    const endState = counterReducer(startState, action)

    expect(endState.maxValue).toBe(11)
})