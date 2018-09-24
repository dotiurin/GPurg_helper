import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import MainPage from './components/mainpage/mainPage';
import DomainJoinLine from './components/domains/DomainJoinLine';

export default class MainRouter extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={MainPage} />
                    <Route exact path='/home' component={MainPage} />
                    <Route exact path='/domains' component={DomainJoinLine} />
                    <Route component='asd' />
                </Switch>
            </main>
        );
    }
}