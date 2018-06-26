import React, { Component } from "react";
import { setToken } from "./../actions/tokenresolver";
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
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Header extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      repo: "facebook",
      token: ""
    };
    this.onTokenChange = this.onTokenChange.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  onTokenChange = e => {
    debugger;
    if (e.target.value) {
      debugger;
      this.props.setToken(e.target.value);
    }
  };
  render() {
    return (
      <div>
        <Navbar light expand="md">
          <NavbarBrand href="/gitbrowser">GitHub Browser</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem class="repoholder">
                <NavLink href="#">Repository Name </NavLink>
              </NavItem>
              <NavItem class="repoholder">
                <Input
                  value={this.state.repo}
                  disabled
                  placeholder="Enter repository name"
                />
              </NavItem>
              {/* <NavItem class="repoholder">
                <Input
                  value={this.props.token}
                  placeholder="Enter repository name"
                  onChange={this.onTokenChange}
                />
              </NavItem> */}
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

const mapHeaderStatetoProps = state => ({
  token: state.tokenreducer.token
});

Header.propTypes = {
  token: PropTypes.string.isRequired,
  setToken: PropTypes.func.isRequired
};

export default connect(
  mapHeaderStatetoProps,
  {
    setToken
  }
)(Header);
