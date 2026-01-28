import "../src/App.css";
import "./animations.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Span, P, SubTitle, Section, CoverText, IntroText } from "./App";
import Html from "./images/html.png";
import Css from "./images/css.png";
import Javascript from "./images/javascript.png";
import React from "./images/react.png";
import Tailwind from "./images/tailwindcss.png";
import Node from "./images/nodejs.png";
import MongoDB from "./images/mongodb.png";
import Postgres from "./images/postgresql.png";
import Mysql from "./images/mysql.png";
import ZohoMail from "./images/Zoho-Mail.png";
import github from "./images/github.jpg";
import cpanel from "./images/cpanel.png";
import netlify from "./images/netlify.png";
import vercel from "./images/vercel.png";
import render from "./images/render.png";

const StackCard = ({ children }) => {
  return (
    <div className="bg-black flex-shrink-0 flex flex-col gap-1.5 items-center justify-between border-2 max-h-80 w-36 md:w-auto md:min-w-38 px-4 py-5 border-[#4c4c4c] rounded-[10px] p-4 hover:border-[#c9f31d] transition-all duration-300 hover:shadow-lg hover:shadow-[#c9f31d20] group">
      {children}
    </div>
  );
};

const InfiniteScrollRow = ({ children, direction = 'left', speed = '40s' }) => {
  return (
    <div className="overflow-hidden w-full py-4">
      <div 
        className={`flex gap-4 w-max ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
        style={{ '--speed': speed }}
      >
        {children}
        {children} {/* Duplique les enfants pour créer un effet de boucle fluide */}
      </div>
    </div>
  );
};

export function H5({ children }) {
  return (
    <h5 className="text-white font-bold bg-[#80808030] w-full text-center p-1">
      {children}
    </h5>
  );
}

const SkillSection = ({ darkMode }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  const stacks = [
    { name: 'HTML', icon: Html },
    { name: 'CSS', icon: Css },
    { name: 'JavaScript', icon: Javascript },
    { name: 'React', icon: React },
    { name: 'Tailwind', icon: Tailwind },
    { name: 'Node.js', icon: Node },
    { name: 'GitHub', icon: github },
    { name: 'MongoDB', icon: MongoDB },
    { name: 'PostgreSQL', icon: Postgres },
    { name: 'MySQL', icon: Mysql },
    { name: 'Cpanel', icon: cpanel },
    { name: 'Vercel', icon: vercel },
    { name: 'render', icon: render },
    { name: 'Netlify', icon: netlify },
    { name: 'Zoho Mail', icon: ZohoMail },
  ];
  
  // Dupliquer les stacks pour un défilement plus fluide
  const doubleStacks = [...stacks, ...stacks];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = (index) => ({
    hidden: { 
      x: index % 2 === 0 ? -100 : 100, 
      opacity: 0,
      rotate: index % 2 === 0 ? -10 : 10
    },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        mass: 0.5
      }
    }
  });

  return (
    <Section
      margin={"-150px"}
      id="skills"
      className="bg-black text-white px-0"
      darkMode={darkMode}
    >
      <motion.div 
        ref={containerRef} 
        className="flex flex-col gap-10 max-w-5xl mx-auto px-2 md:px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex flex-col gap-5">
          <SubTitle>
            <span className="text-2xl md:text-4xl">Mes Compétences</span>
          </SubTitle>
          <CoverText margin={"-70px"}>Compétences</CoverText>
          <IntroText>
            <span className="text-lg md:text-2xl">
              Explorons ensemble mes{" "}
              <Span color={"#c9f31d"}>Compétences & Stack</Span>
            </span>
          </IntroText>
          <P>
            De l'interface utilisateur à l'optimisation des performances, je
            travaille avec des technologies de pointe pour garantir un résultat
            de qualité, depuis les bases pures aux frameworks !
          </P>
          <P>
            Voici les technologies avec lesquelles je travaille quotidiennement
          </P>
        </div>

        {/* Version desktop - Grille normale */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-10">
          {stacks.map((skill, index) => (
            <motion.div
              key={skill.name}
              custom={index}
              variants={cardVariants(index)}
            >
              <StackCard>
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-12 h-12 object-contain" 
                  loading="lazy"
                />
                <H5>{skill.name}</H5>
              </StackCard>
            </motion.div>
          ))}
        </div>

        {/* Version mobile - Défilement infini */}
        <div className="md:hidden space-y-4">
          <InfiniteScrollRow direction="left">
            {doubleStacks.map((skill, index) => (
              <StackCard key={`left-${index}`}>
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                />
                <H5>{skill.name}</H5>
              </StackCard>
            ))}
          </InfiniteScrollRow>
          
          <InfiniteScrollRow direction="right" speed="50s">
            {[...doubleStacks].reverse().map((skill, index) => (
              <StackCard key={`right-${index}`}>
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                />
                <H5>{skill.name}</H5>
              </StackCard>
            ))}
          </InfiniteScrollRow>
        </div>
      </motion.div>
    </Section>
  );
};

export default SkillSection;
