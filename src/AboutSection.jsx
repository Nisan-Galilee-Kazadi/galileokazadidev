import React, { useRef, useEffect } from "react";
import "../src/App.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { Span, P, SKillTitle } from "./ui";
import { SubTitle } from "./App";
import { Section } from "./App";
import { CoverText } from "./App";
import { IntroText } from "./App";
import BigIcon from "./images/big-icon.png";

const AboutSection = ({ darkMode }) => {
  const imageRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(imageRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      controls.start({
        rotate: 360,
        scale: [0.5, 1.1, 1],
        opacity: 1,
        transition: {
          duration: 1.5,
          ease: [0.6, -0.05, 0.01, 0.99]
        }
      });
    }
  }, [isInView, controls]);


  return (
    <Section margin={"-100px"} id="about" darkMode={darkMode}>
      <div className="devAbout max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-y-12 md:gap-x-12 px-2 md:px-6">
        <div className="devAboutLeft flex-1">
          <div className="mb-10">
            <SubTitle>
              <span className="text-2xl md:text-4xl">A propos de Moi</span>
            </SubTitle>
            <CoverText margin={"-55px"}>A propos </CoverText>
            <IntroText>
              <span className="text-lg md:text-2xl">
                Apporteur des{" "}
                <Span color={"#c9f31d"}>Solutions à vos problemes </Span>
                proffesionnel, grâce à des productions Webs & Digitales
              </span>
            </IntroText>
            {/* <P>
              Curieux et créatif, avec une vrai passion pour les expériences
              digitales pensées;j'aime créer des sites a la fois esthétiquex
              rapids et facilmes à utiliser. Chaque ligne de code écrite donne
              vie à vos idées et vous rapproche de votre objectif.
            </P> */}
            <p
              id="text"
              className={`w-full mt-4 ${
                darkMode ? "text-[#444]" : "text-[#838383]"
              } text-sm md:text-base`}
            >
              L'idée est simple : moi, j'ai une poche à remplir et une
              MasterClass à atteindre. Vous, cependant, vous avez un{" "}
              <Span>Business</Span> à faire tourner, une <Span>Image</Span> à
              promouvoir et à <Span>à conserver</Span>.Plus loin il vous
              faudrait <Span>automatiser</Span> des taches et allèger la{" "}
              <Span>Gestion</Span> et avoir un historique établi en templs réel
              d'ou vous avez besoin d'un alier qui vous apporte une{" "}
              <Span>touche numerique</Span>...
            </p>
          </div>
          <div className="flex flex-wrap w-full gap-y-2 gap-x-6 mb-12 ">
            <SKillTitle>Development site Web</SKillTitle>
            <SKillTitle>UX/UI & Design</SKillTitle>
            <SKillTitle>Marketing Digital</SKillTitle>
            <SKillTitle>Development app Web</SKillTitle>
          </div>
          {/* <div className="flex flex-col items-center justify-center text-center gap-2 bg-[#434343] border-2 border-white rounded-[8px] px-1 py-2 mt-3 w-full">
            <div className="flex flex-col ">
              <i className="fas fa-envelope"></i>
              <div className="">
                <p className="text-[11px] text-[#aaaaaa] font-semibold">
                  Mon Email:
                </p>
                <a href="mailto:galileokazadi45@gmail.com">
                  <p>galileokazadi45@gmail.com</p>
                </a>
              </div>
            </div>
            <div className="contactDetail">
              <i className="fas fa-phone"></i>
              <div className="">
                <p className="text-[11px] text-[#aaaaaa] font-semibold">
                  Contactez moi au:
                </p>
                <a href="tel: +243 84 208 11 80">
                  <p>+243 84 208 11 80</p>
                </a>
              </div>
            </div>
          </div> */}
        </div>
        <div className="-mt-8 md:mt-0 flex-1 flex flex-col items-center justify-center">
          <div className="cicle mt-2 mb-2 ">
            <p className=" z-40 absolute left-17 ">
              <span className="text-[#c9f31d] text-2xl font-bold">Del </span>
              <span className="font-semibold text-[14px] "> Cultura Señor</span>
            </p>
          </div>
          <div className="aboutImage z-10 -mt-3 max-w-xs md:max-w-sm lg:max-w-md">
            <motion.img
              ref={imageRef}
              src={BigIcon}
              alt="profile"
              className="w-full h-auto rounded-xl shadow-lg"
              initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
              animate={controls}
              whileHover={{
                scale: 1.05,
                rotate: 15,
                transition: { 
                  rotate: { duration: 0.5, type: "spring", bounce: 0.5 },
                  scale: { duration: 0.3 }
                }
              }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
