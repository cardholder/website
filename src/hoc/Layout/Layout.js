import React, { Component } from 'react';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import classes from './Layout.css';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    componentDidMount = () => {
        if ( window.innerWidth <= 1024 ) {
            this.setState({
                showSideDrawer: false
            });
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
                <div className={ classes.Icon }>
                    <FontAwesomeIcon onClick={ this.sideDrawerHandler } icon={ faBars } size="2x" />
                </div>
                
                <main className={ classes.Content }>
                    { this.props.children }
                </main>
            </div>
        )
    }
}

export default Layout