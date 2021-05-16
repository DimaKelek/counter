import React from "react";
import S from "./ScreenSettings.module.css"
import {SettingInput} from "./SettingInput/SettingInput";

type ScreenSettingsPropsType = {
    startValue: number
    setStartValue: (value: number) => void
    maxValue: number
    setMaxValue: (value: number) => void
}

export function ScreenSettings(props: ScreenSettingsPropsType) {
    return (
        <div className={S.screen}>
            <SettingInput
                title="Max value: "
                value={props.maxValue}
                setValue={props.setMaxValue}

                startValue={props.startValue}
                maxValue={props.maxValue}
            />
            <SettingInput
                title="Start value: "
                value={props.startValue}
                setValue={props.setStartValue}

                startValue={props.startValue}
                maxValue={props.maxValue}
            />
        </div>
    );
}