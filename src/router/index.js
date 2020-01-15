import React, { Fragment } from 'react';

import { Router } from '@reach/router'


import HomePage from '../pages/home'
import ConatactPage from '../pages/contact'
import AboutPage from '../pages/about'
import TravelPage from '../pages/travel'
import LifeStylePage from '../pages/lifestyle'


const Index = () => {
    return (
        <Fragment>
            <Router>
                <HomePage path="/" />
                <AboutPage path="/about" />
                <ConatactPage path="/contact" />
                <TravelPage path="/travel" />
                <LifeStylePage path="/lifestyle" />
            </Router>
        </Fragment>
    );
}

export default Index;