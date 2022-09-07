import React from 'react';
import { Container } from 'reactstrap';
import NavbarTop from '../UI/NavbarTop';

const Layout = (props) => {
  


    return (
      <div>
        <NavbarTop />
        <Container>
          {props.children}
        </Container>
      </div>
    );
  }


export default Layout;