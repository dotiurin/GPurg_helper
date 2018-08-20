import React from 'react';
import { DomainsThrowdown } from './domains_throwdown';


export default class domainsJoins extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return(
            <div>
                <DomainsThrowdown />
            </div>
        );
    }
}