import React from "react";
import { NavLink } from "react-router-dom";
import S from "./ControlPanel.module.css"
import {MyButton} from "./MyButton/MyButton";

type ControlPanelPropsType = {
    counter: number
    setCounter: (newCounter: number) => void

    startValue: number
    maxValue: number
}

export function ControlPanel(props: ControlPanelPropsType) {
    const counter = props.counter

    const clickCallback = () => {
        if(counter < props.maxValue) {
            props.setCounter(counter + 1)
        }
    }
    const resetCallback = () => {
        props.setCounter(props.startValue)
    }


    return (
        <div className={S.panel}>
            <MyButton
                title="Click"
                onClick={clickCallback}
                disabled={counter === props.maxValue}
            />
            <MyButton
                title="Reset"
                onClick={resetCallback}
                disabled={counter === props.startValue}
            />
            <NavLink to="/settings">
                <MyButton title="Set" />
            </NavLink>
        </div>
    );
}