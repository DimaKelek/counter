import React from "react";
import S from "./Screen.module.css"
import {observer} from "mobx-react";
import {useMobXStore} from "../../mobX/useMobXStore";

export const ScreenWithMobX: React.FC = observer(props => {
    const {counterValue, maxValue} = useMobXStore()
    const style = `${S.value} ${counterValue === maxValue ? S.stop : ""}`
    return (
        <div className={S.screen}>
            <div className={style}>{counterValue}</div>
        </div>
    );
})