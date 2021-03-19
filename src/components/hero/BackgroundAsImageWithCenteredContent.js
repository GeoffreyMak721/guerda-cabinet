import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import Header, {
  NavLink,
  NavLinks,
  PrimaryLink as PrimaryLinkBase,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";

import introBg from "images/demo/intro-bg.jpg";
import introBg1 from "images/demo/intro-bg1.jpg";
import introBg2 from "images/demo/intro-bg2.jpg";
const StyledHeader = styled(Header)`
  ${tw`p-4 bg-primary-400 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }

  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`;
const MainContainer = styled.div`
  ${tw`relative -mx-8 -mt-8`}
`;
const Container = styled.div`
  ${tw`relative bg-center bg-cover min-h-144`}
  background-image: url("${(props) => props.bg}");
  height: calc(100vh - 70px);
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-2xl text-center sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default () => {
  const [index, setIndex] = useState(0);
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    !!element &&
      element.scrollIntoView({
        behavior: "smooth",
      });
  };

  const handleChangeIndex = (index) => {
    setIndex(index);
  };
  const navLinks = [
    <NavLinks key={1}>
      <NavLink onClick={() => scrollTo("home")}>Accueil</NavLink>
      <NavLink onClick={() => scrollTo("domain")}>Domaines</NavLink>
      <NavLink onClick={() => scrollTo("team")}>Equipes</NavLink>
      <NavLink onClick={() => scrollTo("testimonials")}>Temoignages</NavLink>
      <NavLink onClick={() => scrollTo("blog")}>Blog</NavLink>
      <NavLink onClick={() => scrollTo("contact")}>Contact</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink to="/login">Connexion</PrimaryLink>
    </NavLinks>,
  ];

  return (
    <MainContainer>
      <StyledHeader links={navLinks} />
      <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex}>
        <Container bg={introBg}>
          <OpacityOverlay />
          <HeroContainer>
            <Content>
              <Heading>
                Nous prenons soin de vous et nous savons vous défendre dans le
                domaine juridique !
              </Heading>
              <PrimaryAction>Apprendre encore plus</PrimaryAction>
            </Content>
          </HeroContainer>
        </Container>
        <Container bg={introBg1}>
          <OpacityOverlay />
          <HeroContainer>
            <Content>
              <Heading>Un accompagnement juridique personnalisé</Heading>
              {/* <PrimaryAction>Apprendre encore plus</PrimaryAction> */}
            </Content>
          </HeroContainer>
        </Container>
        <Container bg={introBg2}>
          <OpacityOverlay />
          <HeroContainer>
            <Content>
              <Heading>
                Privilégier la négociation Pour parvenir à des accords sur
                mesure
              </Heading>
              {/* <PrimaryAction>Apprendre encore plus</PrimaryAction> */}
            </Content>
          </HeroContainer>
        </Container>
      </AutoPlaySwipeableViews>
    </MainContainer>
  );
};
