import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import classnames from "classnames";
import {
  Collapse,
  Badge,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

import "./CartNavBar.css"


function CartNavbar(props) {
    const [navbarCollapse, setNavbarCollapse] = React.useState(false);
    const history = useHistory();

    function handleClick(route) {
        history.push(`/${route}`);
    }

    const toggleNavbarCollapse = () => {
        setNavbarCollapse(!navbarCollapse);
        document.documentElement.classList.toggle("nav-open");
    };

  return (
    <Navbar
      className="navbar"
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            className="cart-nav-brand"
            onClick={() => handleClick("")}
            data-placement="bottom"
            title="Cars Land"
          >
            Cars | Land
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem className="cart-nav">
              <NavLink onClick={() => handleClick("")}>
                  <i className="nc-icon lg nc-shop nav-icon" />
                  <p className="d-lg-none"> Home </p>
              </NavLink>
            </NavItem>
            <NavItem className="cart-nav">
                <NavLink onClick={() => handleClick('cars')}>
                    <i className="nc-icon lg nc-layout-11 nav-icon"/>
                    <p className="d-lg-none"> Cars </p>
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <p className="d-lg-none">
                    <i className="nc-icon nc-support-17" /> Support
                </p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default CartNavbar;
