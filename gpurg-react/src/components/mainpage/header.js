import React from 'react';

import NavBar from './navbar';


export default class HeaderMessage extends React.Component {
    render() {
        return(
            <div>
                <h1>I am header indeed of the almost blank page</h1>
                <NavBar></NavBar>
            </div>
        );
    }
}