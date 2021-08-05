import React from "react";
import {NavLink} from "react-router-dom";
import {MyButton} from "../../Counter/ControlPanel/MyButton/MyButton";
import S from "./ControlSettingPanel.module.css"
import {useDispatch, useSelector} from "react-redux";
import {initialStateType, resetAC} from "../../redux/counter-reduser";
import {CounterStoreType} from "../../redux/store";

export function ControlSettingPanel() {
    const counterData = useSelector<CounterStoreType, initialStateType>(state => state.counter)
    const dispatch = useDispatch()

    const disabled = counterData.maxValue <= counterData.startValue
        || counterData.maxValue < 0 || counterData.startValue < 0
    return (
        <div className={S.panel}>
            <NavLink to="/counter">
                <MyButton
                    title="Set"
                    disabled={disabled}
                    onClick={() => dispatch(resetAC())}
                />
            </NavLink>
        </div>
    );
}