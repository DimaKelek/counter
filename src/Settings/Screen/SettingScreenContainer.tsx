import React from "react";
import {connect} from "react-redux";
import {changeMaxValueAC, changeStartValueAC, CounterActionsType, CounterType} from "../../redux/counter-reduser";
import {CounterStoreType} from "../../redux/store";
import {ScreenSettings} from "./ScreenSettings";


type mapStateToPropsType = CounterType
type mapDispatchToPropsType = {
    changeStartValue: (newValue: number) => void
    changeMaxValue: (newValue: number) => void
}

export type ScreenSettingsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: CounterStoreType): mapStateToPropsType => {
    return {
        counterValue: state.counter.counterValue,
        startValue: state.counter.startValue,
        maxValue: state.counter.maxValue,
    }
}
const mapDispatchToProps = (dispatch: (action: CounterActionsType) => void): mapDispatchToPropsType => {
    return {
        changeStartValue: (newValue: number) => {
            dispatch(changeStartValueAC(newValue))
        },
        changeMaxValue: (newValue: number) => {
            dispatch(changeMaxValueAC(newValue))
        },
    }
}

export const SettingScreenContainer = connect(mapStateToProps, mapDispatchToProps)(ScreenSettings)