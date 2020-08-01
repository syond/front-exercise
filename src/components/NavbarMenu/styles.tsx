import styled from "styled-components";
import { Login } from '../../styles/Icons';

import { NubankLogo as NubankIcon } from '../NubankLogo';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 15px 20px 15px 20px;

  border-bottom: 1px solid;
  border-color: var(--white);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
`;

export const LeftMenu = styled.div`
  display: flex;
  align-items: center;

  font-size: 18px;
`;

export const Logo = styled(NubankIcon)`
  width: 40px;
  height: 40px;
`;

export const MenuButton = styled.div`
  padding-left: 25px;

  color: var(--gray);
  font-weight: 500;

  cursor: pointer;

  &:hover{
    color: var(--link-hover-light);
  }
`;

export const RightMenu = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;

  margin-right: 30px;
`;

export const MenuButtonLogin = styled(MenuButton)`
  margin-right: 18px;

  font-weight: bold;
  color: var(--nubank);

  cursor: pointer; 

  
`;

export const LoginIcon = styled(Login)`
  width: 30px;
  height: 30px;
  fill: var(--nubank);

  &:hover{
    fill: var(--link-hover);
    transition: 0.3;
  }
`;
