import React from 'react';
import ThrowDown from './throwdown';
import { domainsServiceGet } from './domainsService';


export default class DomainJoinLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            domains: 'Null',
        };
    }

    componentWillMount() {
        this.getDomainItems();
    };

    getDomainItems = () => {
        domainsServiceGet(true).then(response => this.setState({'domains': response.data.domains}));
    };

    render() {
        const domains = this.state.domains;

        return(
        <div>
            <p>{domains}</p>
            <ThrowDown domains={domains}/>
        </div>
        );
    }
}