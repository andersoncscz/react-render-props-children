import React, { Component } from 'react'

import Toggle from '../../utils/Toggle';

import NavbarUserMenu from './NavbarUserMenu';
import NavbarUserInfo from './NavbarUserInfo';
import NavbarNotifiers from './NavbarNotifiers';
import NavbarMenuButton from './NavbarMenuButton';
import NavbarInfo from './NavbarInfo';

import './Navbar.css'

class Navbar extends Component {

    render() {
        
        const { toggle } = this.props;

        return (
            <nav className="navbar navbar-light bg-light shadow">
                <div className="d-flex justify-content-start">
                    <NavbarMenuButton onClick={toggle} icon="bars" />
                    <NavbarInfo {...this.props} />
			    </div>                       
                <div className="d-flex nav justify-content-end my-navbar-hide-icons">
                    <NavbarNotifiers icon="bell" numberOfnotifications={3} />
                    <NavbarNotifiers icon="envelope" numberOfnotifications={12} />
                    <div className="d-flex nav justify-content-end my-navbar-hide-user-info">
                        <NavbarUserInfo {...this.props} />
                        <Toggle>
                            { ({isCollapsed, toggle }) => <NavbarUserMenu isCollapsed={isCollapsed} toggle={toggle} /> }
                        </Toggle>                 
                    </div>
                </div>
            </nav>    
        )
    }
}

export default Navbar;