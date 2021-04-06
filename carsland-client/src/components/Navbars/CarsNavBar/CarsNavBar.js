import React, { useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom'
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

import "./CarsNavBar.css"

function CarsNavBar(props) {
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
            className="product-nav-brand"
            data-placement="bottom"
            onClick={() => handleClick("")}
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
              <NavLink to="/cart" onClick={() => handleClick("cart")}>
                  <i className="nc-icon lg nc-cart-simple cart-icon" />
                  <p className="d-lg-none"> Cart </p>
                  { props.counter ?  <Badge pill>{props.counter}</Badge> : <></> }
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/"
                target="_blank"
              >
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

export default CarsNavBar;
