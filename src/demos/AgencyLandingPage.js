import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/ThreeColSimple.js";

// import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
// import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import MainFeature2 from "components/features/VerticalWithAlternateImageAndText.js";
// import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "components/testimonials/SimplePrimaryBackground.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
// import FAQ from "components/faqs/SimpleWithSideImage.js";
import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";
// import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import ContactUsForm from "components/forms/SimpleContactUs.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";

// import ShieldIconImage from "images/shield-icon.svg";
import ShieldIconImage from "images/family.png";
// import SupportIconImage from "images/support-icon.svg";
import SupportIconImage from "images/jigsaw.png";
// import CustomizeIconImage from "images/customize-icon.svg";
import CustomizeIconImage from "images/skills.png";

const cards = [
  {
    imageSrc: ShieldIconImage,
    title: "NOTRE SPÉCIALITÉ : LA FAMILLE",
    description:
      "Notre cabinet est exclusivement dédié au droit de la famille que nous pratiquons au quotidien. Cela nous permet de vous conseiller au mieux dans les problématiques familiales que vous rencontrez.",
  },
  {
    imageSrc: SupportIconImage,
    title: "RÉSOUDRE DURABLEMENT VOTRE PROBLÉMATIQUE",
    description:
      "Il est important pour nous de tout mettre en œuvre pour vous aider à trouver des solutions pérennes et d’éviter, dans la mesure du possible, des conflits récurrents, usants et coûteux.",
  },
  {
    imageSrc: CustomizeIconImage,
    title: "DES COMPÉTENCES AU SERVICE DE VOTRE DOSSIER",
    description:
      "Nous travaillons en équipe pour vous accompagner au mieux tout au long de votre dossier. Nous gagnons ainsi en disponibilité, réactivité et compétence.",
  },
];

const Subheading = tw.span`uppercase tracking-wider text-sm`;
const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => (
  <AnimationRevealPage>
    <Hero />
    <MainFeature
      subheading="NOS VALEURS"
      heading="FAITES NOUS CONFIANCE."
      description="Nous sommes fiers que notre cabinet d'avocats offre des services juridiques de premier ordre à un prix abordable à l'échelle nationale! Avec nous, vous n'aurez jamais l'impression que les avocats ne sont que des voleurs en procès, en plus, nous gagnons 98% de tous les cas. Alors avec nous, vos chances de gagner sont aussi élevées que possible!"
      cards={cards}
      linkText={null}
    />
    <Features
      subheading="NOS DOMAINES"
      heading="DOMAINES D' INTERVANTION"
      // description="Nous sommes fiers que notre cabinet d'avocats offre des services juridiques de premier ordre à un prix abordable à l'échelle nationale! Avec nous, vous n'aurez jamais l'impression que les avocats ne sont que des voleurs en procès, en plus, nous gagnons 98% de tous les cas. Alors avec nous, vos chances de gagner sont aussi élevées que possible!"
    />
    <MainFeature2
      subheading="NOTRE EQUIPE"
      heading="CONNAITRE L' EQUIPE."
      description=" Vous feriez mieux d'avoir une équipe tout aussi dure d'avocats pointilleux pour devenir gagnant(e) du tribunal!"
    />
    {/* <Portfolio /> */}
    <Testimonial
      subheading="TEMOIGNAGES"
      heading={
        <>
          NOS CLIENT <span tw="text-primary-500">NOUS AIMES.</span>
        </>
      }
      description="Voir les témoignages que nos clients ont soumis jusqu'à présent:"
      testimonials={[
        {
          imageSrc:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
          profileImageSrc:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
          quote:
            "Le litige commercial a toujours été ce que nos concurrents utilisaient pour nous supprimer… Mais dès que nous avons embauché ce cabinet d'avocats qui, d'ailleurs, avait des honoraires 5 fois inférieurs à ceux que nos concurrents payaient à leurs avocats, nous avons finalement eu tous les différends résolus en notre faveur!",
          customerName: "Charlotte Hale",
          customerTitle: "CEO, Tesla Inc.",
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
          profileImageSrc:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
          quote:
            "Il y a quelque temps, notre société a traversé un processus de fusion-acquisition très dur, qui nous a laissé questionner nos partenaires commerciaux. Mais grâce à ce cabinet d'avocats, nous avons enfin pu résoudre notre situation et reprendre notre entreprise!",
          customerName: "Adam Cuppy",
          customerTitle: "Founder, Nestle",
        },
      ]}
      textOnLeft={true}
    />
    <FAQ
      imageSrc={customerSupportIllustrationSrc}
      imageContain={true}
      imageShadow={false}
      subheading="FAQs"
      heading={
        <>
          AVEZ-VOUS UNE <span tw="text-primary-500">QUESTION ?</span>
        </>
      }
      description="Nous avous une liste des questions les plus posées par nos client"
    />
    <Blog
      subheading="NOTRE BLOG"
      heading={
        <>
          NOUS AIMONS <span tw="text-primary-500">ECRIRE.</span>
        </>
      }
      description="Des temps en temps nous publions une chronique sur un thème relatif au droit, qui peut vous intéresser."
    />

    {/* <ContactDetails
      cards={[
        {
          title: "New York",
          description: (
            <>
              <Address>
                <AddressLine>40 Gates Court</AddressLine>
                <AddressLine>Endicott, NY 13760</AddressLine>
              </Address>
              <Email>contact@treact.com</Email>
              <Phone>+1 (203) 991-6988</Phone>
            </>
          ),
        },
        {
          title: "Illinois",
          description: (
            <>
              <Address>
                <AddressLine>602 Annadale Drive</AddressLine>
                <AddressLine>Dekalb, IL 60115</AddressLine>
              </Address>
              <Email>contact@treact.com</Email>
              <Phone>+1 (203) 991-6988</Phone>
            </>
          ),
        },
        {
          title: "California",
          description: (
            <>
              <Address>
                <AddressLine>96 NE. Delaware Lane</AddressLine>
                <AddressLine>Sacramento, CA 95820</AddressLine>
              </Address>
              <Email>contact@treact.com</Email>
              <Phone>+1 (203) 991-6988</Phone>
            </>
          ),
        },
        {
          title: "Tennessee",
          description: (
            <>
              <Address>
                <AddressLine>74 Peachtree Ave.</AddressLine>
                <AddressLine>Dyersburg, TN 38024</AddressLine>
              </Address>
              <Email>contact@treact.com</Email>
              <Phone>+1 (203) 991-6988</Phone>
            </>
          ),
        },
        {
          title: "New Jersey",
          description: (
            <>
              <Address>
                <AddressLine>8355 Summer Street</AddressLine>
                <AddressLine>Manchester, NJ 08759</AddressLine>
              </Address>
              <Email>contact@treact.com</Email>
              <Phone>+1 (203) 991-6988</Phone>
            </>
          ),
        },
        {
          title: "Ohio",
          description: (
            <>
              <Address>
                <AddressLine>7713 Snake Hill Ave.</AddressLine>
                <AddressLine>Piqua, OH 45356</AddressLine>
              </Address>
              <Email>contact@treact.com</Email>
              <Phone>+1 (203) 991-6988</Phone>
            </>
          ),
        },
      ]}
    /> */}
    <ContactUsForm
      subheading="CONTACT"
      heading={<>VOUS POUVEZ PRENDRE CONTACT.</>}
      description="Nous somme la à votre écoute vous pouvez nous laisser vos preoccupations"
    />
    <Footer />
  </AnimationRevealPage>
);
