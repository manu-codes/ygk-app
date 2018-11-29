import * as React from "react"
import { RouteComponentProps } from 'react-router';

export interface Props extends RouteComponentProps {
    children?: React.ReactNode
}
//  interface State {
// }

export default class Programs extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <div>{this.props.location.pathname.replace('/','')}</div>
            </React.Fragment>
        )
    }
}
