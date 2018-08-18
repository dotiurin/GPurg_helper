import React from 'react';
import { domainsServiceGet } from './domainsService';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';



export default class DomainsThrowdown extends React.Component {

    state = {
        domains: [],
        selectedOption: 'select',
    };

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    }
    componentWillMount() {
        this.getDomainItems();
    }

    getDomainItems = () => {
        domainsServiceGet(true).then(response => this.setState({'domains': response.data.domains}));
    };

    render() {
        return(
            <div>
                <p>your domains, sir:</p>

                <Select
                    value={this.state.selectedOption}
                >
                    {this.state.domains.map((domain) =>
                        <MenuItem key={domain} value={domain} primaryText={domain}>{domain}</MenuItem>
                    )}
                </Select>
            </div>
        );
    }
}