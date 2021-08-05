import React from "react";
import S from "./Counter.module.css"
import {Header} from "./Header/Header";
import {ControlPanelWithMobX} from "./ControlPanel/ControlPanelWithMobX";
import {inject, observer} from "mobx-react";
import {ScreenWithMobX} from "./Screen/ScreenWithMobX";

type CounterPropsType = {

}

export const CounterWithMobX: React.FC = observer(props => {
    return (
        <div className={S.counter}>
            <Header title="Counter"/>
            <ScreenWithMobX />
            <ControlPanelWithMobX />
        </div>
    );
})