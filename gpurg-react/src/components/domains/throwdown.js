import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


export default class Throwdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            domains: this.props.domains,
            selectedOption: 'select',
        };
    }



    handleChange = (event) => {
        this.setState({ selectedOption: event.target.value });
    };

    render() {

        return(
            <div>
                <p>Select domain to join, sir: {this.state.domains}</p>

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