import React, { Fragment } from 'react'

import Title from '../../Title/Title';
import NavigationItems from '../NavigationItems/NavigationItems';
import Footer from '../../Footer/Footer';

import classes from './SideDrawer.css';


const sideDrawer = ( props ) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    
    return (
        <Fragment>
            <div className={ attachedClasses.join(' ') }>
                <Title>cardholder</Title>
                <NavigationItems />

                <Footer />
            </div>
        </Fragment>
    );

}

export default sideDrawer