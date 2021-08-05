import React from "react";
import S from "./Settings.module.css";
import {Header} from "../Counter/Header/Header";
import {ScreenSettingsWithMobX} from "./Screen/ScreenSettingsWithMobX";
import {ControlSettingPanelWithMobX} from "./SettingsPanel/ControlSettingPanelWithMobX";

type SettingsPropsType = {

}

export const SettingsWithMobX: React.FC<SettingsPropsType> = props => {
    return (
        <div className={S.counter}>
            <Header title="Settings"/>
            <ScreenSettingsWithMobX/>
            <ControlSettingPanelWithMobX/>
        </div>
    );
}