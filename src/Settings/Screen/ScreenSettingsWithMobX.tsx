import React from "react";
import S from "./ScreenSettings.module.css"
import {SettingInputWithMobX} from "./SettingInput/SettingInputWithMobX";
import {observer} from "mobx-react";
import {useMobXStore} from "../../mobX/useMobXStore";

export const ScreenSettingsWithMobX: React.FC = observer(props => {
    const {maxValue, startValue, changeStartValue, changeMaxValue} = useMobXStore()
    return (
        <div className={S.screen}>
            <SettingInputWithMobX
                title="Max value: "
                value={maxValue}
                setValue={changeMaxValue}

                startValue={startValue}
                maxValue={maxValue}
            />
            <SettingInputWithMobX
                title="Start value: "
                value={startValue}
                setValue={changeStartValue}

                startValue={startValue}
                maxValue={maxValue}
            />
        </div>
    );
})