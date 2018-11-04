import * as React from 'react';
import './App.css';

import { API_KEY, sid } from './conf.local';
import logo from './logo.svg';

const url = 'https://sheets.googleapis.com/v4/spreadsheets/' + sid + '/values/mem?key=' + API_KEY;
const urlpost = 'https://sheets.googleapis.com/v4/spreadsheets/' + sid + '/values/Sheet1!A4:C4?valueInputOption=USER_ENTERED&key=' + API_KEY;
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
    public onClick() {
        const data = {
            "majorDimension": "ROWS",
            "range": "Sheet1!A4:C4",
            "values": [
              ["Item", "Cost", "Stocked"],
              
            ],
          };
        fetch(urlpost, {
            body: JSON.stringify(data), // body data type must match "Content-Type" header
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            method: 'put',
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client

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
                    <button onClick={this.onClick}>Click</button>
                </p>
            </div>
        );
    }
}

export default App;
