import React from "react";
import {NavLink} from "react-router-dom";
import {MyButton} from "../../Counter/ControlPanel/MyButton/MyButton";
import S from "./ControlSettingPanel.module.css"

type ControlSettingPanelPropsType = {
    startValue: number
    maxValue: number
}

export function ControlSettingPanel(props: ControlSettingPanelPropsType) {
    const setCallback = () => {

    }
    const disabled = props.maxValue <= props.startValue || props.maxValue < 0 || props.startValue < 0
    return (
        <div className={S.panel}>
            <NavLink to="/counter">
                <MyButton
                    title="Set"
                    onClick={setCallback}
                    disabled={disabled}
                />
            </NavLink>
        </div>
    );
}