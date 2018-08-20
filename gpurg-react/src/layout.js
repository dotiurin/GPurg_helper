import React from 'react';
import MainRouter from './mainRouter';

import HeaderMessage from './components/mainpage/header';
import FooterMessage from './components/mainpage/footer';


export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <HeaderMessage />
                    <MainRouter/>
                <FooterMessage />
            </div>
        )
    }
}
