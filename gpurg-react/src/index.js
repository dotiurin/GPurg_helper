import React from 'react';
import ReactDOM from 'react-dom';
import HeaderMessage from './components/mainpage/header';
import FooterMessage from './components/mainpage/footer';

const Index = () => {
    return <div>
                <HeaderMessage />
                <p>body example message</p>
                <FooterMessage />
    </div>;
};

ReactDOM.render(<Index />, document.getElementById('root'));
