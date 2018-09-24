import React from 'react';
import { domainsServiceGet } from './domainsService';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


export default class DomainsThrowdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            domains: [],
            selectedOption: 'select',
        };
    }

    handleChange = (event) => {
        this.setState({ selectedOption: event.target.value });
    };

    componentWillMount() {
        this.getDomainItems();
    }

    getDomainItems = () => {
        domainsServiceGet(true).then(response => this.setState({'domains': response.data.domains}));
    };

    render() {
        return(
            <div>
                <p>Select domain to join, sir:</p>

                <Select
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                >
                    {this.state.domains.map((domain) =>
                        <MenuItem key={domain} value={domain} primaryText={domain}>{domain}</MenuItem>
                    )}
                </Select>
            </div>
        );
    }
}