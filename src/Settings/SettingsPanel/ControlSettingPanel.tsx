import React from "react";
import {NavLink} from "react-router-dom";
import {MyButton} from "../../Counter/ControlPanel/MyButton/MyButton";
import S from "./ControlSettingPanel.module.css"
import { ControlSettingsPanelPropsType } from "./ControlSettingsPanelContainer";

export function ControlSettingPanel(props: ControlSettingsPanelPropsType) {
    const disabled = props.maxValue <= props.startValue || props.maxValue < 0 || props.startValue < 0
    return (
        <div className={S.panel}>
            <NavLink to="/counter">
                <MyButton
                    title="Set"
                    disabled={disabled}
                />
            </NavLink>
        </div>
    );
}