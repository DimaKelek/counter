import React, {useState} from "react";
import S from "./Settings.module.css";
import {Header} from "../Counter/Header/Header";
import {ScreenSettings} from "./Screen/ScreenSettings";
import {ControlSettingPanel} from "./ControlPanel/ControlSettingPanel";

type SettingsPropsType = {
    startValue: number
    setStartValue: (value: number) => void
    maxValue: number
    setMaxValue: (value: number) => void
}

export function Settings(props: SettingsPropsType) {

    return (
        <div className={S.counter}>
            <Header title="Settings"/>
            <ScreenSettings
                startValue={props.startValue}
                maxValue={props.maxValue}
                setStartValue={props.setStartValue}
                setMaxValue={props.setMaxValue}
            />
            <ControlSettingPanel
                startValue={props.startValue}
                maxValue={props.maxValue}
            />
        </div>
    );
}