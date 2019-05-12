import React, { Component } from 'react';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    render() {
        return (
            <div className={ classes.Layout }>
                <SideDrawer open={ this.state.showSideDrawer } />
                
                <main className={ classes.Content }>
                    { this.props.children }
                </main>
            </div>
        )
    }
}

export default Layout