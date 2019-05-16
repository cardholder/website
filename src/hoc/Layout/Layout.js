import React, { Component } from 'react';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';

class Layout extends Component {
    constructor ( props ) {
        super(props);

        let showSideDrawer = true;
        
        if ( window.innerWidth <= 1024 ) {
            showSideDrawer = true
        }

        this.state = {
            showSideDrawer: showSideDrawer
        }
    }

    sideDrawerHandler = (event) => {
        this.setState(prev => {
            return { showSideDrawer: !prev.showSideDrawer };
        })
    } 

    render() {

        return (
            <div className={ classes.Layout }>
                <div className={ classes.SideDrawer }>
                    <SideDrawer open={ this.state.showSideDrawer } closed={ this.sideDrawerHandler } />
                </div>
                
                <main className={ classes.Content }>
                    { this.props.children }
                </main>
            </div>
        )
    }
}

export default Layout