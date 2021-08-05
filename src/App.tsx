import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import {CounterWithMobX} from "./Counter/CounterWithMobX";
import {SettingsWithMobX} from "./Settings/SettingsWithMobX";

function App() {
    return (
        <div className={"main"}>
            {/*<Switch>*/}
            {/*    <Route path="/counter" render={() => <Counter />}/>*/}
            {/*    <Route path="/settings" render={() => <Settings />}/>*/}
            {/*    <Redirect to='/counter'/>*/}
            {/*</Switch>*/}
            <Switch>
                <Route path="/counterMobX" render={() => <CounterWithMobX />}/>
                <Route path="/settingsMobX" render={() => <SettingsWithMobX />}/>
                <Redirect to='/counterMobX'/>
            </Switch>
        </div>
    )
}

export default App;