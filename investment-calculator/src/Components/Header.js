import React from 'react';
import logo from './investment-calculator-logo.png';
import '../index.css';



    function Header(props) {
        return (

            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>Investment Calculator</h1>
                </header>
            </div>
        );
    }

    export default Header;