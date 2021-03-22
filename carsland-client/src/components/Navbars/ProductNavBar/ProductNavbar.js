import React, { useEffect } from 'react';
import classnames from "classnames";
import {
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container, Badge,
} from "reactstrap";

function ProductNavbar(props) {
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

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
            data-placement="bottom"
            href="/"
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
            <NavItem>
                <NavLink to="" >
                    <p className="d-lg-none">
                        <i className="nc-icon nc-layout-11" /> Cars
                    </p>
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/cart" target="_blank">
                  <i className="nc-icon lg nc-cart-simple" />
                  <p className="d-lg-none"> Cart</p>
                  { props.counter !== 0 && <Badge pill>{props.counter}</Badge> }
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

export default ProductNavbar;
