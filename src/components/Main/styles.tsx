import styled, { css } from "styled-components";

import { CallMade, ArrowForward } from "../../styles/Icons";

interface Props {
  backgroundColor?: string;
  color?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionContent = styled.section<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 100%;

  padding: 60px;

  background: ${(props) => props.backgroundColor || "white"};
`;

export const LeftContent = styled.div`
  width: 546px;
  height: auto;

  > a {
    text-decoration: none;
    font-weight: 600;
    font-size: 48px;
    color: var(--nubank);

    :hover{
      text-decoration: underline;
    }
  }

  > p {
    font-weight: 600;
    font-size: 48px;
    color: var(--text);

    line-height: 1.15;

    margin-bottom: 30px;
  }
`;

export const LeftContentNubank = styled(LeftContent)`
  > a {
    color: var(--link-hover-light);
  }

  > p {
    color: var(--secondary);
  }
`;

export const InfoLink = styled.a<Props>`
  display: flex;
  align-items: center;

  width: auto;

  &:hover {
    cursor: pointer;
  }

  > a {
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    color: ${(props) => props.color || "var(--link-hover)"};
  }
`;

export const RightContent = styled.div`  
  
`;

const iconCSS = css<Props>`
  height: 18px;
  width: 18px;

  fill: ${(props) => props.color || "var(--link-hover)"};

  margin-left: 5px;
`;

export const ArrowIcon = styled(CallMade)`
  ${iconCSS};
`;

export const ArrowForwardIcon = styled(ArrowForward)`
  ${iconCSS};
`;
