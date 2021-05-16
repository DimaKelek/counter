import React from "react";
import S from "./Screen.module.css"

type ScreenPropsType = {
    counter: number
    maxValue: number
}

export function Screen(props: ScreenPropsType) {
    const style = `${S.value} ${props.counter === props.maxValue ? S.stop : ""}`
    return (
        <div className={S.screen}>
            <div className={style}>{props.counter}</div>
        </div>
    );
}