import React from "react";
import S from "./ScreenSettings.module.css"
import {SettingInput} from "./SettingInput/SettingInput";
import { ScreenSettingsPropsType } from "./SettingScreenContainer";

export function ScreenSettings(props: ScreenSettingsPropsType) {
    return (
        <div className={S.screen}>
            <SettingInput
                title="Max value: "
                value={props.maxValue}
                setValue={props.changeMaxValue}

                startValue={props.startValue}
                maxValue={props.maxValue}
            />
            <SettingInput
                title="Start value: "
                value={props.startValue}
                setValue={props.changeStartValue}

                startValue={props.startValue}
                maxValue={props.maxValue}
            />
        </div>
    );
}