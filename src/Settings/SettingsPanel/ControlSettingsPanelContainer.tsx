import React from "react";
import {CounterStoreType} from "../../redux/store";
import {CounterActionsType, CounterType} from "../../redux/counter-reduser";
import {connect} from "react-redux";
import {ControlSettingPanel} from "./ControlSettingPanel";

type mapStateToPropsType = CounterType
type mapDispatchToPropsType = {}

export type ControlSettingsPanelPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: CounterStoreType): mapStateToPropsType => {
    return {
        counterValue: state.counter.counterValue,
        startValue: state.counter.startValue,
        maxValue: state.counter.maxValue
    }
}
const mapDispatchToProps = (dispatch: (action: CounterActionsType) => void): mapDispatchToPropsType => {
    return {}
}

export const ControlSettingsPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ControlSettingPanel)
