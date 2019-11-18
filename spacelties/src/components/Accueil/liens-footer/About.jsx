import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './links.css';
import '../index.css';

class About extends React.Component {
    render() {
        return (
            <div class="afoot lg-12 md-12 sm-12">
                <Navbar />
                <form class="row lg-12 md-12 sm-12" action="wait">
                    <h1 class="row lg-12 md-12 sm-12 about">We are now in the 3rd millenium</h1>
                    <h3 class="row lg-12 md-12 sm-12 about2">As we can travel everywhere in the outer space, Spacelties proposes some destinations to eat what you want, where you want.</h3>
                </form>
                <Footer />
            </div>
        )
    }
}

export default About;