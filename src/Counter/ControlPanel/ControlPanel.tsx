import React from "react";
import {NavLink} from "react-router-dom";
import S from "./ControlPanel.module.css"
import {MyButton} from "./MyButton/MyButton";
import {useDispatch, useSelector} from "react-redux";
import {CounterStoreType} from "../../redux/store";
import {clickAC, initialStateType, resetAC} from "../../redux/counter-reduser";

export function ControlPanel() {
    const counterData = useSelector<CounterStoreType, initialStateType>(state => state.counter)
    const dispatch = useDispatch()

    const counter = counterData.counterValue

    const clickCallback = () => dispatch(clickAC())
    const resetCallback = () => dispatch(resetAC())
    return (
        <div className={S.panel}>
            <MyButton
                title="Click"
                onClick={clickCallback}
                disabled={counter === counterData.maxValue}
            />
            <MyButton
                title="Reset"
                onClick={resetCallback}
                disabled={counter === counterData.startValue}
            />
            <NavLink to="/settings">
                <MyButton title="Set" />
            </NavLink>
        </div>
    );
}