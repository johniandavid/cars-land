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

import "./ProductNavbar.css"

function ProductNavBar(props) {
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
      className="fixed-top navbar"
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            className="product-nav-brand"
            data-placement="bottom"
            onClick={() => handleClick("")}
            title="CarsPage Land"
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
            <NavItem className="product-nav">
              <NavLink to="/cart" onClick={() => handleClick("cart")}>
                  <i className="nc-icon lg nc-cart-simple nav-icon" />
                  <p className="d-lg-none"> Cart </p>
                  { props.counter ?  <Badge pill>{props.counter}</Badge> : <></> }
              </NavLink>
            </NavItem>
            <NavItem className="product-nav">
                <NavLink  onClick={() => handleClick("cars")}>
                    <i className="nc-icon lg nc-layout-11 nav-icon" />
                    <p className="d-lg-none"> Cars </p>
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

export default ProductNavBar;
