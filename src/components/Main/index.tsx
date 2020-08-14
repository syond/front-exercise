import React from "react";

import {
  Container,
  Section,
  SectionContent,
  LeftContent,
  LeftContentNubank,
  InfoLink,
  RightContent,
  ArrowIcon,
  ArrowForwardIcon,
  SectionChallange,
  LeftContentChallange,
  SectionNuCommunity,
  SectionNuBlog,
} from "./styles";

import DeviceImage from "../../assets/nuconta-inclined-device@3x.png.webp";
import HandImage from "../../assets/holding-card-vertical@2x.png";
import RewardsHomeImage from "../../assets/rewards-home-card@2x.png";

const Main: React.FC = () => {
  return (
    <Container>
      <Section backgroundColor="var(--secondary)">
        <SectionContent>
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
      </Section>

      <Section backgroundColor="var(--primary)">
        <SectionContent>
          <LeftContent>
            <a href="/">Cartão de Crédito</a>
            <p>
              Pode chamar ele de roxinho. Além disso, pode chamar ele de
              moderno, gratuito e prático também.
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
      </Section>

      <Section backgroundColor="var(--bg-content)">
        <SectionContent>
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
      </Section>

      <SectionChallange>
        <SectionContent>
          <LeftContentChallange>
            <p>Reinventando a relação das pessoas com o dinheiro</p>
            <InfoLink color="var(--secondary)">
              <a href="/">É nisso que acreditamos</a>
              <ArrowForwardIcon color="var(--secondary)" />
            </InfoLink>
          </LeftContentChallange>
        </SectionContent>
      </SectionChallange>

      <SectionNuCommunity>
        <SectionContent>
          <LeftContentChallange>
            <h1>NuCommunity</h1>
            <p>A comunidade oficial do Nubank</p>
            <InfoLink color="var(--secondary)">
              <a href="/">Tire dúvidas, compartilhe ideias e faça parte</a>
              <ArrowForwardIcon color="var(--secondary)" />
            </InfoLink>
          </LeftContentChallange>
        </SectionContent>
      </SectionNuCommunity>

      <SectionNuBlog>
        <SectionContent>
          <LeftContentChallange>
            <p>Um blog para você repensar o seu dinheiro</p>
            <InfoLink color="var(--secondary)">
              <a href="/">Conheça o Fala, Nubank</a>
              <ArrowForwardIcon color="var(--secondary)" />
            </InfoLink>
          </LeftContentChallange>
        </SectionContent>
      </SectionNuBlog>
    </Container>
  );
};

export default Main;
