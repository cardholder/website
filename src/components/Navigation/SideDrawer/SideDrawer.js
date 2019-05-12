import React, { Fragment } from 'react'

import classes from './SideDrawer.css';


const sideDrawer = ( props ) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    
    return (
        <Fragment>
            <div className={ attachedClasses.join(' ') }>
            </div>
        </Fragment>
    );

}

export default sideDrawer