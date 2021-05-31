import React from "react";
import S from "./Counter.module.css"
import {Header} from "./Header/Header";
import {ControlPanelContainer} from "./ControlPanel/ControlPanelContainer";
import {ScreenContainer} from "./Screen/ScreenContainer";

type CounterPropsType = {

}

export function Counter(props: CounterPropsType) {
    /*const [counter, setCounter] = useState<number>(0)
    useEffect(() => {
        let startValueString = localStorage.getItem("startValue")
        if(startValueString) {
            let newStartValue = JSON.parse(startValueString)
            setCounter(newStartValue)
        }
    }, [])*/
    return (
        <div className={S.counter}>
            <Header title="Counter"/>
            <ScreenContainer/>
            <ControlPanelContainer />
        </div>
    );
}