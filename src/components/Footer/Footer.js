import React from 'react';
import NavigationItem from '../Navigation/NavigationItems/NavigationItem/NavigationItem';
import StoreLogo from '../StoreLogo/StoreLogo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import aStoreLogo from '../../assets/a-store.png';
import gStoreLogo from '../../assets/g-store.png';

import classes from './Footer.css';

const footer = () => (
    <div className={ classes.Footer }>
        <div className={ classes.Github }>   
            <a href="https://github.com/cardholder"><FontAwesomeIcon icon={ faGithub } size="2x" /></a>
        </div>
        <div className={ classes.StoreLogos }>
            <StoreLogo alt="Apple Store Placeholder" path={ aStoreLogo } height="40px" />
            <StoreLogo alt="Google Store Placeholder" path={ gStoreLogo } height="40px" />
        </div>
        <NavigationItem to="/impressum" exact>Impressum</NavigationItem>
    </div>
);

export default footer;