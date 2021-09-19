import React from "react";
import { Nav, NavItem, NavLink, Container } from "reactstrap";
import "./Header.css";
function Header(props) {
  return (
    <>
      <Container className="themed-container" fluid={true}>
        <div className="headerContainer">
          <div className="logo">Logo</div>
          <div className="mainMenu">
            <Nav>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/aboutus">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/concatus">Contact US</NavLink>
              </NavItem>
            </Nav>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Header;
