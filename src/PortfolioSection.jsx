import { Section, SubTitles } from "./App";
import "./App.css";
import React from "react";
import { CoverText } from "./App";
import { IntroText } from "./App";
import { P } from "./App";
import { Span } from "./App";
import { Button } from "./App";
import EcoleImage from "./images/gestionecole.png";
import AcceuilEcole from "./images/acceuilecole.png";
import Agency from "./images/agency.png";
import Hik from "./images/hik.png";
import KengelApp from "./images/kengelapp.png";
import Alsquare from "./images/alsquare.png";
import Portfolio from "./images/porfolio2.png";
import KatGlamour from "./images/katglamour.png";
import ProjectCarousel from "./ProjectCarousel";
import { SubTitle } from "./App";

export function ProjetTitle({ children }) {
  return (
    <h4 className="text-[#c9f31d] font-bold text-[16px] z-50 relative">
      {children}
    </h4>
  );
}

const PortfolioSection = ({ darkMode }) => {
  return (
    <Section
      id="portfolio"
      margin={"-120px"}
      darkMode={darkMode}
      className=" text-center "
    >
      <div className="devProjects max-w-6xl mx-auto px-2 md:px-6">
        <SubTitle>Mes Projets</SubTitle>
        <SubTitles></SubTitles>
        <CoverText margin={"-55px"} id="imposter2">
          Mes Projets
        </CoverText>
        <IntroText>
          <span className="text-lg md:text-2xl ">
            Explorons quelques uns de{" "}
            <Span color={"#c9f31d"}> Mes Projets</Span>
          </span>
        </IntroText>
        <ProjectCarousel />
      </div>
    </Section>
  );
};

export default PortfolioSection;
