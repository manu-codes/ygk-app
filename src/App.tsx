import * as React from 'react';
import './App.css';

// import { API_KEY, sid } from './conf.local';
import GapiAuth from './components/GapiAuth';
import logo from './logo.svg';

// const url = 'https://sheets.googleapis.com/v4/spreadsheets/' + sid + '/values/mem?key=' + API_KEY;
// const urlpost = 'https://sheets.googleapis.com/v4/spreadsheets/' + sid + '/values/Sheet1!A4:C4?valueInputOption=USER_ENTERED&key=' + API_KEY;
class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    <GapiAuth/>
                </p>
            </div>
        );
    }
}

export default App;
