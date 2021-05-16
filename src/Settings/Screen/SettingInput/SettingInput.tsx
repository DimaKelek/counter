import React, {ChangeEvent} from "react";
import S from "./SettingInput.module.css"

type SettingInputPropsType = {
    title: string
    value: number
    setValue: (value: number) => void

    startValue: number
    maxValue: number
}

export function SettingInput(props: SettingInputPropsType) {
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(e.currentTarget.valueAsNumber)
    }
    const style = `${S.input} ${
        props.maxValue <= props.startValue ? S.error :
            props.startValue < 0 ? S.error :
                props.maxValue < 0 ? S.error : ""

    }`

    return (
        <div className={S.input_box}>
            <div className={S.label}>{props.title}</div>
            <input
                className={style}
                type="number"
                onChange={onChangeInput}
                value={props.value}
            />
        </div>
    );
}