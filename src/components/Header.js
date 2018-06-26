import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input
} from "reactstrap";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      repo:'facebook'
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
      
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md">
          <NavbarBrand href="/">GitHub Browser</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem class="repoholder">
                <NavLink href="#">Repository Name  </NavLink>
              </NavItem>
              <NavItem class="repoholder">
                <Input
                  value={this.state.repo}
                  placeholder="Enter repository name"
                />
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/superdexter">Author</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
