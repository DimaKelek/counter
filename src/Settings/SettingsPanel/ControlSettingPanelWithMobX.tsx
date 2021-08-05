import React from "react";
import {NavLink} from "react-router-dom";
import {MyButton} from "../../Counter/ControlPanel/MyButton/MyButton";
import S from "./ControlSettingPanel.module.css"
import {observer} from "mobx-react";
import {useMobXStore} from "../../mobX/useMobXStore";

export const ControlSettingPanelWithMobX: React.FC = observer(props => {
    const {maxValue, startValue, reset} = useMobXStore()
    const disabled = maxValue <= startValue || maxValue < 0 || startValue < 0
    return (
        <div className={S.panel}>
            <NavLink to="/counterMobX">
                <MyButton
                    title="Set"
                    disabled={disabled}
                    onClick={reset}
                />
            </NavLink>
        </div>
    );
})