import React, {ChangeEvent} from "react";
import S from "./SettingInput.module.css"
import {useDispatch} from "react-redux";
import {changeMaxValueAC, changeStartValueAC} from "../../../redux/counter-reduser";

type SettingInputPropsType = {
    title: string
    value: number
    startValue: number
    maxValue: number
    setValue: typeof changeStartValueAC | typeof changeMaxValueAC
}

export function SettingInput(props: SettingInputPropsType) {
    const dispatch = useDispatch()

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(props.setValue(e.currentTarget.valueAsNumber))
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