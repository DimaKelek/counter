import React from "react";
import S from "./ScreenSettings.module.css"
import {SettingInputWithMobX} from "./SettingInput/SettingInputWithMobX";
import {useSelector} from "react-redux";
import {CounterStoreType} from "../../redux/store";
import {changeMaxValueAC, changeStartValueAC, initialStateType} from "../../redux/counter-reduser";

export function ScreenSettings() {
    const counterData = useSelector<CounterStoreType, initialStateType>(state => state.counter)

    return (
        <div className={S.screen}>
            <SettingInputWithMobX
                title="Max value: "
                value={counterData.maxValue}
                setValue={changeMaxValueAC}

                startValue={counterData.startValue}
                maxValue={counterData.maxValue}
            />
            <SettingInputWithMobX
                title="Start value: "
                value={counterData.startValue}
                setValue={changeStartValueAC}

                startValue={counterData.startValue}
                maxValue={counterData.maxValue}
            />
        </div>
    );
}