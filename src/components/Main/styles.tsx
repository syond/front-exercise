import styled, { css } from "styled-components";

import { CallMade, ArrowForward } from "../../styles/Icons";

import ChallangeSystemImg from "../../assets/challenge-system-large.jpg.webp";
import NuCommunityImg from "../../assets/nucommunity@3x.jpg.webp";
import NuBlogImg from "../../assets/holding-device-smile@3x.jpg.webp";

interface Props {
  backgroundColor?: string;
  color?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section<Props>`
  width: 100vw;
  height: 857px;
  background: ${(props) => props.backgroundColor || "white"};

  display: flex;
  justify-content: center;
`;

export const SectionChallange = styled(Section)`
  background-size: cover;
  background-image: url(${ChallangeSystemImg});
  background-position: center center;
`;

export const SectionNuCommunity = styled(Section)`
  background-size: cover;
  background-image: url(${NuCommunityImg});
  background-position: center center;
`;

export const SectionNuBlog = styled(Section)`
  background-size: cover;
  background-image: url(${NuBlogImg});
  background-position: center center;
`;

export const SectionContent = styled.section<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 1328px;

  padding: 64px;
`;

export const LeftContent = styled.div`
  width: 546px;

  > h1 {
    font-weight: 600;
    font-size: 48px;
    color: var(--secondary);
  }

  > a {
    text-decoration: none;
    font-weight: 600;
    font-size: 48px;
    color: var(--nubank);

    :hover {
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

export const LeftContentChallange = styled(LeftContent)`
  > a {
    color: var(--secondary);
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

export const RightContent = styled.div``;

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
