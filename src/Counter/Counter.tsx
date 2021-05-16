import React, {useEffect, useState} from "react";
import S from "./Counter.module.css"
import {Header} from "./Header/Header";
import {Screen} from "./Screen/Screen";
import {ControlPanel} from "./ControlPanel/ControlPanel";

type CounterPropsType = {
    startValue: number
    maxValue: number
}

export function Counter(props: CounterPropsType) {
    const [counter, setCounter] = useState<number>(0)
    useEffect(() => {
        let startValueString = localStorage.getItem("startValue")
        if(startValueString) {
            let newStartValue = JSON.parse(startValueString)
            setCounter(newStartValue)
        }
    }, [])
    return (
        <div className={S.counter}>
            <Header title="Counter"/>
            <Screen
                counter={counter}
                maxValue={props.maxValue}
            />
            <ControlPanel
                counter={counter}
                setCounter={setCounter}
                startValue={props.startValue}
                maxValue={props.maxValue}
            />
        </div>
    );
}