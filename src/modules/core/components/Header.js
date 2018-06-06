import React from 'react';
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';

const Header = ()=>(
  <header>
    <Navbar color="dark" dark expand="md" style={{justifyContent: "center"}}>
      <NavbarBrand href="/">Site Title</NavbarBrand>
    </Navbar>
  </header>
);

export default Header;