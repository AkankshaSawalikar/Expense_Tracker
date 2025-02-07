
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// NavBar component with links to routes
const Navigation = () => {
  return (
    <NavBar>
      <NavList>
        <NavItem>
          <NavLinkStyled to="/dashboard" activeClassName="active">
            Dashboard
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/income" activeClassName="active">
            Income
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/expenses" activeClassName="active">
            Expenses
          </NavLinkStyled>
        </NavItem>
        {/* <NavItem>
          <NavLinkStyled to="/signup" activeClassName="active">
            Sign Up
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/login" activeClassName="active">
            Log In
          </NavLinkStyled>
        </NavItem> */}
      </NavList>
    </NavBar>
  );
};

const NavBar = styled.nav`
  background-color: #2c3e50;
  padding: 10px 0;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 20px;
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #3498db;
  }

  &.active {
    color: #e74c3c;
    font-weight: bold;
  }
`;

export default Navigation;
