import React from "react";
import S from "./Screen.module.css"
import { ScreenPropsType } from "./ScreenContainer";

export function Screen(props: ScreenPropsType) {
    const style = `${S.value} ${props.counterValue === props.maxValue ? S.stop : ""}`
    return (
        <div className={S.screen}>
            <div className={style}>{props.counterValue}</div>
        </div>
    );
}