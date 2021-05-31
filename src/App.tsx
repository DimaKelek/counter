import React, {useEffect, useState} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import {Counter} from "./Counter/Counter";
import {Settings} from "./Settings/Settings";

function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(1)

   /* useEffect(()=> {
        let startValueString = localStorage.getItem("startValue")
        let maxValueString = localStorage.getItem("maxValue")
        if(startValueString) {
            let newStartValue = JSON.parse(startValueString)
            setStartValue(newStartValue)
        }
        if(maxValueString) {
            let newMaxValue = JSON.parse(maxValueString)
            setMaxValue(newMaxValue)
        }
    }, [])
    useEffect(() => {
        if(startValue >= 0 && maxValue >= 0 ) {
            localStorage.setItem("startValue", JSON.stringify(startValue))
            localStorage.setItem("maxValue", JSON.stringify(maxValue))
        }
    }, [startValue, maxValue])*/

    return (
        <div className={"main"}>
            <Switch>
                <Route path="/counter" render={() =>
                    <Counter
                        startValue={startValue}
                        maxValue={maxValue}
                    />
                }/>
                <Route path="/settings" render={() =>
                    <Settings
                        startValue={startValue}
                        maxValue={maxValue}
                        setStartValue={setStartValue}
                        setMaxValue={setMaxValue}
                    />
                }/>
                <Redirect to='/counter'/>
            </Switch>
        </div>
    );
}

export default App;