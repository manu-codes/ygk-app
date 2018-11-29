import * as React from "react"
import { Link } from 'react-router-dom';

export interface Props {
    children?: React.ReactNode
}

// export interface State {
// }

export default class PageList extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <ul>
                <li>
                    <Link to="/members">Members</Link>
                    <Link to="/programs">Programs</Link>
                </li>
            </ul>
        )
    }
}
