import React, { useEffect } from 'react';
import { useHistory} from 'react-router-dom'
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

import "./HomeNavbar.css"


function HomeNavbar(props) {
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
          className="fixed-top dark navbar-transparent"
          color-on-scroll="300"
          expand="lg"
        >
          <Container>
            <div className="navbar-translate">
               <NavbarBrand
                onClick={() => handleClick("")}
                data-placement="bottom"
                title="Cars Land"
                className="home-nav-brand"
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
                <span className="navbar-toggler-bar bar1 dark" />
                <span className="navbar-toggler-bar bar2 dark" />
                <span className="navbar-toggler-bar bar3 dark" />
              </button>
            </div>
            <Collapse
              className="justify-content-end"
              navbar
              isOpen={navbarCollapse}
            >
              <Nav navbar>
                 <NavItem>
                    <NavLink onClick={() => handleClick('cars')}>
                        <i className="nc-icon lg nc-layout-11"/>
                        <p className="d-lg-none"> Cars </p>
                    </NavLink>
                </NavItem>
                 <NavItem>
                  <NavLink to="/cart" onClick={() => handleClick('cart')}>
                    <i className="nc-icon lg nc-cart-simple" />
                    <p className="d-lg-none"> Cart </p>
                    { props.counter ?  <Badge pill>{props.counter}</Badge> : <></> }
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <p className="d-lg-none">
                        <i className="nc-icon nc-support-17 dark" /> Support
                    </p>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      );
    }

export default HomeNavbar;
