import React, {Component} from 'react';
import {Navbar, Nav, NavbarToggler, Collapse, NavLink, NavItem} from 'reactstrap';

class Navigation extends Component {

    navItems = [
        "Home",
        "Story",
        "Wedding",
        "Accommodation",
        "Registry",
        "RSVP"
    ];

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {

        let items = this.navItems.map(item => (
            <NavItem key={item.toLowerCase()}>
                <NavLink href={'#' + item.toLowerCase()}>{item}</NavLink>
            </NavItem>
        ));

        return (
            <div className="container-fluid">
                <Navbar>
                    <NavbarToggler onClick={this.toggleNavbar}>
                        <i className="ion-android-menu"></i>
                    </NavbarToggler>
                    <Collapse isOpen={!this.state.collapsed} navbar id="navbar">
                        <Nav navbar>
                            {items}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;