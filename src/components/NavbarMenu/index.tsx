import React from "react";

//import Button from '../Button';

import { 
  Container,
  Logo,
  MenuButton,
  RightMenu,
  MenuButtonLogin,
  LoginIcon,
} from "./styles";

const NavbarMenu: React.FC = () => {
  return (
    <Container>
      <Logo />

      <MenuButton>
        <span>Início</span>
      </MenuButton>

      <MenuButton>
        <span>Conta digital</span>
      </MenuButton>

      <MenuButton>
        <span>Cartão de crédito</span>
      </MenuButton>

      <MenuButton>
        <span>Rewards</span>
      </MenuButton>

      <MenuButton>
        <span>Empréstimo</span>
      </MenuButton>

      <MenuButton>
        <span>Conta PJ</span>
      </MenuButton>

      <MenuButton>
        <span>Sobre nós</span>
      </MenuButton>

      <MenuButton>
        <span>Carreiras</span>
      </MenuButton>

      <RightMenu>
        <MenuButtonLogin>
          <span>Login</span>
        </MenuButtonLogin>

        <LoginIcon />

        {/* <Button>*/}
          <span>Quero ser Nubank</span>
        {/* </Button> */}
      </RightMenu>
    </Container>
  );
};

export default NavbarMenu;
