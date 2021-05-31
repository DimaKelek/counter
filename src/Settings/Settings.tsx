import React from "react";
import S from "./Settings.module.css";
import {Header} from "../Counter/Header/Header";
import {ControlSettingsPanelContainer} from "./SettingsPanel/ControlSettingsPanelContainer";
import {SettingScreenContainer} from "./Screen/SettingScreenContainer";

type SettingsPropsType = {

}

export function Settings(props: SettingsPropsType) {

    return (
        <div className={S.counter}>
            <Header title="Settings"/>
            <SettingScreenContainer/>
            <ControlSettingsPanelContainer/>
        </div>
    );
}