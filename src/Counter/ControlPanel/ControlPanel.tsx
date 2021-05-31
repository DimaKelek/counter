import React from "react";
import { NavLink } from "react-router-dom";
import S from "./ControlPanel.module.css"
import {MyButton} from "./MyButton/MyButton";
import {ControlPanelPropsType} from "./ControlPanelContainer";

export function ControlPanel(props: ControlPanelPropsType) {
    const counter = props.counterValue

    const clickCallback = () => {
        props.click()
    }
    const resetCallback = () => {
        props.reset()
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