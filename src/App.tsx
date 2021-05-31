import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import {Counter} from "./Counter/Counter";
import {Settings} from "./Settings/Settings";

function App() {
    return (
        <div className={"main"}>
            <Switch>
                <Route path="/counter" render={() => <Counter />}/>
                <Route path="/settings" render={() => <Settings />}/>
                <Redirect to='/counter'/>
            </Switch>
        </div>
    );
}

export default App;