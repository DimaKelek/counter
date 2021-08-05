import React from "react";
import {NavLink} from "react-router-dom";
import S from "./ControlPanel.module.css"
import {MyButton} from "./MyButton/MyButton";
import {observer} from "mobx-react";
import {useMobXStore} from "../../mobX/useMobXStore";

export const ControlPanelWithMobX: React.FC = observer(props => {
    const {counterValue, maxValue, startValue, reset, click} = useMobXStore()
    return (
        <div className={S.panel}>
            <MyButton
                title="Click"
                onClick={click}
                disabled={counterValue === maxValue}
            />
            <MyButton
                title="Reset"
                onClick={reset}
                disabled={counterValue === startValue}
            />
            <NavLink to="/settingsMobX"><MyButton title="Set" /></NavLink>
        </div>
    );
})