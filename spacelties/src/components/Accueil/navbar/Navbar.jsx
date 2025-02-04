import React from 'react';
import './navbar.css'

class Footer extends React.Component {
    render() {
        return (
            <header className="bla">
                <nav>
                    <header class="header">
                        <a href="/laloupe-092019-projet2-vlf-crew/#/" className="brandlogo"><img src="./logo.png" height="35px" alt="pizzalogo" /></a>
                        <a href="/laloupe-092019-projet2-vlf-crew/#/" className="brand">Spacelties</a>
                        <input className="menu-btn" type="checkbox" id="menu-btn" />
                        <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
                        <ul className="menu">
                            <li><a href="/laloupe-092019-projet2-vlf-crew/#/ChoicePage">I Want to Choose</a></li>
                            <li><a href="/laloupe-092019-projet2-vlf-crew/#/Result">Surprise Me !</a></li>
                            <li><a href="/laloupe-092019-projet2-vlf-crew/#/">Contact</a></li>
                        </ul>
                    </header>
                </nav>
            </header>
        )
    }
}

export default Footer; 