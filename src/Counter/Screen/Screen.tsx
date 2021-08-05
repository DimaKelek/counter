import React from "react";
import S from "./Screen.module.css"
import {useSelector} from "react-redux";
import {CounterStoreType} from "../../redux/store";
import {initialStateType} from "../../redux/counter-reduser";

export function Screen() {
    const counterData = useSelector<CounterStoreType, initialStateType>(state => state.counter)

    const style = `${S.value} ${counterData.counterValue === counterData.maxValue ? S.stop : ""}`
    return (
        <div className={S.screen}>
            <div className={style}>{counterData.counterValue}</div>
        </div>
    );
}