import React from "react";
import S from "./Settings.module.css";
import {Header} from "../Counter/Header/Header";
import {ControlSettingPanel} from "./SettingsPanel/ControlSettingPanel";
import {ScreenSettings} from "./Screen/ScreenSettings";

type SettingsPropsType = {

}

export function Settings(props: SettingsPropsType) {

    return (
        <div className={S.counter}>
            <Header title="Settings"/>
            <ScreenSettings/>
            <ControlSettingPanel/>
        </div>
    );
}