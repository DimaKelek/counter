import {action, makeObservable, observable} from "mobx";

const annotation = {
    counterValue: observable,
    startValue: observable,
    maxValue: observable,
    click: action.bound,
    reset: action.bound,
    changeMaxValue: action.bound,
    changeStartValue: action.bound
}

export const createMobXStore = () => {
    return makeObservable({
        counterValue: 0,
        startValue: 0,
        maxValue: 10,
        click() {
            this.counterValue++
        },
        reset() {
            this.counterValue = this.startValue
        },
        changeMaxValue(value: number) {
            this.maxValue = value
        },
        changeStartValue(value: number) {
            this.startValue = value
        },
    }, annotation)
}

export type StoreWithMobXType = ReturnType<typeof createMobXStore>
