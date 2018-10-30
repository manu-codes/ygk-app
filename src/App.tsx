import * as React from 'react';
import './App.css';

import {  API_KEY, sid } from './conf.local';
import logo from './logo.svg';

const url = 'https://sheets.googleapis.com/v4/spreadsheets/' + sid + '/values/Sheet1?key=' + API_KEY;
class App extends React.Component {
    public componentDidMount2() {
        fetch(url, {
            method: 'get'
        }).then((response) => {
            // tslint:disable-next-line
            console.log(response);

        }).catch((err) => {
            // tslint:disable-next-line
            console.log(err);

            // Error :(
        });
    }
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
            </div>
        );
    }
}

export default App;
