import React, {Component} from 'react';
import {Navbar, Nav, NavbarToggler, Collapse, NavLink, NavItem, Container, NavbarBrand} from 'reactstrap';
import './navigation.css';

class Navigation extends Component {

    navItems = [
        "Home",
        "Story",
        "Wedding",
        "Accommodation",
        "Registry",
        "Beepo",
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
            <Container fluid>
                <Navbar fixed='top' >
                    <NavbarBrand href="/" className="ml-auto"> </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="ml-auto">
                        <i className="oi oi-menu" title="menu" aria-hidden="true" />
                    </NavbarToggler>
                    <Collapse isOpen={!this.state.collapsed} id="navbar">
                        <Nav navbar>
                            {items}
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        );
    }
}

export default Navigation;