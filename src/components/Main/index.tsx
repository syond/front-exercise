import React from "react";

import {
  Container,
  SectionContent,
  LeftContent,
  LeftContentNubank,
  InfoLink,
  RightContent,
  ArrowIcon,
  ArrowForwardIcon,
} from "./styles";

import DeviceImage from "../../assets/nuconta-inclined-device@3x.png.webp";
import HandImage from "../../assets/holding-card-vertical@2x.png";
import RewardsHomeImage from "../../assets/rewards-home-card@2x.png";

const Main: React.FC = () => {
  return (
    <Container>
      <SectionContent backgroundColor="var(--secondary)">
        <LeftContent>
          <a href="/">Conta do Nubank</a>
          <p>
            Nossa conta digital com mais de 20 milhões de clientes em todo o
            Brasil.
          </p>
          <InfoLink>
            <a href="/">Segura e sem complicações</a>
            <ArrowIcon />
          </InfoLink>
        </LeftContent>
        <RightContent>
          <img src={DeviceImage} alt="Teste" width="659" height="580" />
        </RightContent>
      </SectionContent>

      <SectionContent backgroundColor="var(--primary)">
        <LeftContent>
          <a href="/">Cartão de Crédito</a>
          <p>
            Pode chamar ele de roxinho. Além disso, pode chamar ele de moderno,
            gratuito e prático também.
          </p>
          <InfoLink>
            <a href="/">Saiba mais</a>
            <ArrowForwardIcon />
          </InfoLink>
        </LeftContent>
        <RightContent>
          <img src={HandImage} alt="Teste" width="292" height="640" />
        </RightContent>
      </SectionContent>

      <SectionContent backgroundColor="var(--bg-content)">
        <LeftContentNubank>
          <a href="/">Rewards</a>
          <p>Um programa de pontos justo e fácil de usar.</p>
          <InfoLink color="var(--secondary)">
            <a href="/">Saiba mais</a>
            <ArrowIcon color="var(--secondary)" />
          </InfoLink>
        </LeftContentNubank>
        <img src={RewardsHomeImage} alt="Teste" width="372" height="495" />
      </SectionContent>
    </Container>
  );
};

export default Main;
