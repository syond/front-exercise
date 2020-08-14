import React from "react";

import Button from "../Button";

import {
  Container,
  LeftMenu,
  Logo,
  MenuButton,
  RightMenu,
  MenuButtonLogin,
  LoginIcon,
} from "./styles";

const NavbarMenu: React.FC = () => {
  return (
    <Container>
      <LeftMenu>
        <Logo />
        <MenuButton>Início</MenuButton>

        <MenuButton>Conta digital</MenuButton>

        <MenuButton>Cartão de crédito</MenuButton>

        <MenuButton>Rewards</MenuButton>

        <MenuButton>Empréstimo</MenuButton>

        <MenuButton>Conta PJ</MenuButton>

        <MenuButton>Sobre nós</MenuButton>

        <MenuButton>Carreiras</MenuButton>
      </LeftMenu>

      <RightMenu>
        <MenuButtonLogin>
          Login
          <LoginIcon />
        </MenuButtonLogin>

        <Button>Quero ser Nubank</Button>
      </RightMenu>
    </Container>
  );
};

export default NavbarMenu;
