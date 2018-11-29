import * as React from "react"
import { gapiSignedIn, signIn, signOut, startGapi, getSheet } from '../../utils/gapi';
const timeout = 1000;
let timeoutHandle: any;
interface Props {
    children?: React.ReactNode
    onDataUpdate: (data: any) => any;
    onNoPermision: () => any;
}

interface State {
    loggedIn: boolean;
}

export default class GapiAuth extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
            loggedIn: false
        }
        this.checkGapiStat = this.checkGapiStat.bind(this);
        this.authClick = this.authClick.bind(this);
    }
    componentDidMount() {
        startGapi(process.env);
        timeoutHandle = setTimeout(this.checkGapiStat, timeout);
    }
    checkGapiStat() {
        if (gapiSignedIn) {
            this.setState({ loggedIn: true });
            if (process.env.REACT_APP_TABLES) {
                getSheet(process.env.REACT_APP_TABLES, 'datatables').then(
                    (response: any) => {
                        this.props.onDataUpdate(response.result);
                    }
                ).catch(
                    (response: any) => {
                        if (response.status === 403) {
                            this.props.onNoPermision();
                        }
                    }
                );
            }
            clearTimeout(timeoutHandle)
        } else {
            setTimeout(this.checkGapiStat, timeout);
        }
    }
    authClick() {
        if (this.state.loggedIn) {
            signOut()
        } else {
            signIn();
        }
    }
    render() {
        const { loggedIn } = this.state;
        return (
            <button onClick={this.authClick}>{loggedIn ? 'Logout' : 'Login'}</button>
        )
    }
}
