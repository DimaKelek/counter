import React from "react";
import S from "./ScreenSettings.module.css"
import {SettingInput} from "./SettingInput/SettingInput";
import {useSelector} from "react-redux";
import {CounterStoreType} from "../../redux/store";
import {changeMaxValueAC, changeStartValueAC, CounterType} from "../../redux/counter-reduser";

export function ScreenSettings() {
    const counterData = useSelector<CounterStoreType, CounterType>(state => state.counter)

    return (
        <div className={S.screen}>
            <SettingInput
                title="Max value: "
                value={counterData.maxValue}
                setValue={changeMaxValueAC}

                startValue={counterData.startValue}
                maxValue={counterData.maxValue}
            />
            <SettingInput
                title="Start value: "
                value={counterData.startValue}
                setValue={changeStartValueAC}

                startValue={counterData.startValue}
                maxValue={counterData.maxValue}
            />
        </div>
    );
}