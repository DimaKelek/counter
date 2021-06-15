import React from "react";
import S from "./Counter.module.css"
import {Header} from "./Header/Header";
import {Screen} from "./Screen/Screen";
import {ControlPanel} from "./ControlPanel/ControlPanel";

type CounterPropsType = {

}

export function Counter(props: CounterPropsType) {
    return (
        <div className={S.counter}>
            <Header title="Counter"/>
            <Screen />
            <ControlPanel/>
        </div>
    );
}