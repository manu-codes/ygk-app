import * as React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import GapiAuth from './components/GapiAuth';
import logo from './logo.svg';
import Members from './components/pages/Members';
import PageList from './components/PageList';
import Programs from './components/pages/Programs';
class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="App-title">App</div>
                </header>
                <p className="App-intro">
                    <GapiAuth />
                </p>
                <PageList />
                <Switch>
                    <Route path="/members" component={Members} />
                    <Route path="/programs" component={Programs} />
                </Switch>
            </div>
        );
    }
}

export default App;
