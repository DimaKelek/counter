import React from "react";
import S from "./Counter.module.css"
import {Header} from "./Header/Header";
import {ControlPanelContainer} from "./ControlPanel/ControlPanelContainer";
import {ScreenContainer} from "./Screen/ScreenContainer";

type CounterPropsType = {

}

export function Counter(props: CounterPropsType) {
    return (
        <div className={S.counter}>
            <Header title="Counter"/>
            <ScreenContainer/>
            <ControlPanelContainer />
        </div>
    );
}