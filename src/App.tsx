import * as React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import GapiAuth from './components/GapiAuth';
import logo from './logo.svg';
import Members from './components/pages/Members';
import PageList from './components/PageList';
import Programs from './components/pages/Programs';
interface State {
    allowed: boolean;
}
class App extends React.Component<{}, State> {
    constructor() {
        super({});
        this.state = { allowed: true };
        this.onNoPermision = this.onNoPermision.bind(this);
    }
    onDataUpdate(data: any) {
        console.log('DATA', data);
    }
    onNoPermision() {
        this.setState({
            allowed: false
        })
    }
    public render() {
        const { allowed } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="App-title">App</div>
                </header>
                <p className="App-intro">
                    <GapiAuth onDataUpdate={this.onDataUpdate}
                        onNoPermision={this.onNoPermision} />
                </p>
                {allowed ? <PageList /> : 'Not allowed to view pages. Contact Administrator.'}
                <Switch>
                    <Route path="/members" component={Members} />
                    <Route path="/programs" component={Programs} />
                </Switch>
            </div>
        );
    }
}

export default App;
