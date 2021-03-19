import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

// import SupportIconImage from "../../images/support-icon.svg";
import SupportIconImage from "../../images/boy.png";
// import ShieldIconImage from "../../images/shield-icon.svg";
import ShieldIconImage from "../../images/divorce.png";
// import CustomizeIconImage from "../../images/customize-icon.svg";
import CustomizeIconImage from "../../images/icons8-adopted-boy-96.png";
// import FastIconImage from "../../images/fast-icon.svg";
import FastIconImage from "../../images/icons8-rendez-vous-galant-homme-femme-96.png";
// import ReliableIconImage from "../../images/reliable-icon.svg";
import ReliableIconImage from "../../images/icons8-child-safe-zone-96.png";
// import SimpleIconImage from "../../images/simple-icon.svg";
import SimpleIconImage from "../../images/icons8-contrat-de-travail-96.png";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}//
`;
// const Heading = tw(SectionHeading)`w-full`;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto`;
const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ heading = "", subheading = "", description = "" }) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: ShieldIconImage,
      title: "DIVORCE / SÉPARATION / RUPTURE PACS",
      description:
        "Nous vous conseillons et vous assistons dans toutes les procédures de divorce amiables ou contentieuses.",
    },
    {
      imageSrc: SupportIconImage,
      title: "ENFANTS / PENSIONS ALIMENTAIRES",
      description:
        "Dans le cadre de la séparation des parents (divorce, rupture de PACS ou de concubinage), il est nécessaire d’organiser les modalités relatives aux enfants.",
    },
    {
      imageSrc: CustomizeIconImage,
      title: "FILIATION / ADOPTION",
      description:
        "Différentes actions judiciaires relatives à la filiation sont envisageables.",
    },
    {
      imageSrc: ReliableIconImage,
      title: "PROTECTION DES MINEURS ET DES MAJEURS",
      description:
        "Dans certains cas, il faut protéger un majeur afin d’éviter que certaines personnes abusent de sa vulnérabilité ou de sa faiblesse due à l’âge ou à la maladie.",
    },
    {
      imageSrc: FastIconImage,
      title: "RÉGIMES MATRIMONIAUX / SUCCESSIONS",
      description:
        "Il n’est pas toujours simple de choisir son régime matrimonial ni de savoir ce que ce choix implique comme conséquences durant le mariage.",
    },
    {
      imageSrc: SimpleIconImage,
      title: "PACS",
      description:
        "Nous pouvons nous charger de la rédaction de votre pacte civil de solidarité (PACS) qui est un contrat qui permet d’organiser la vie commune sans pour autant se marier.",
    },
  ];

  return (
    <Container id="domain">
      {subheading && <Subheading>{subheading}</Subheading>}
      {heading && <Heading>{heading}</Heading>}
      {description && <Description>{description}</Description>}
      <ThreeColumnContainer>
        {/* <Heading>
          Nos <span tw="text-primary-500">domaines</span> d’intervention
        </Heading> */}
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description ||
                    "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
