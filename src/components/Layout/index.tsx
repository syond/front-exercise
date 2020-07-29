import React from 'react';

import { Container, Wrapper } from './styles';

import NavbarMenu from '../NavbarMenu';
import Main from '../Main';
import Footer from '../Footer';

const Layout: React.FC = () => {
  return (
      <Container>
          <NavbarMenu />
          <Wrapper> 
            <Main />
            <Footer />
          </Wrapper>
      </Container>
  );
}

export default Layout;