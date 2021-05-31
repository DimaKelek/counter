import React from "react";
import {CounterStoreType} from "../../redux/store";
import {changeMaxValueAC, changeStartValueAC, clickAC, CounterActionsType, CounterType, resetAC} from "../../redux/counter-reduser";
import {connect} from "react-redux";
import {ControlPanel} from "./ControlPanel";


export type mapStateToPropsType = CounterType
export type mapDispatchToPropsType = {
    click: () => void
    reset: () => void
    changeStartValue: (newValue: number) => void
    changeMaxValue: (newValue: number) => void
}

const mapStateToProps = (state: CounterStoreType): mapStateToPropsType => {
    return {
        counterValue: state.counter.counterValue,
        startValue: state.counter.startValue,
        maxValue: state.counter.maxValue
    }
}
const mapDispatchToProps = (dispatch: (action: CounterActionsType) => void): mapDispatchToPropsType => {
    return {
        click: () => {
            dispatch(clickAC())
        },
        reset: () => {
            dispatch(resetAC())
        },
        changeStartValue: (newValue: number) => {
            dispatch(changeStartValueAC(newValue))
        },
        changeMaxValue: (newValue: number) => {
            dispatch(changeMaxValueAC(newValue))
        },

    }
}

export const ControlPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ControlPanel)