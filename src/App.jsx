import "../src/App.css";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import profileImage from "./images/image.jpg";
import AboutSection from "./AboutSection";
import TestimonialSection from "./TestimonialSection";
import ServiceSection from "./ServiceSection";
import SkillSection from "./SkillSection";
import Menu from "./Menu";
import PortfolioSection from "./PortfolioSection";
import DownloadCv from "./images/Nisan-Galiléé Tshimanga Kazadi  CV.pdf";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export function Span({ children, color }) {
  return (
    <span className="font-bold" style={{ color: color }}>
      {children}
    </span>
  );
}

export function Section({ children, margin, id, darkMode, className }) {
  return (
    <section
      className={`py-30 px-4 w-full transition-colors duration-300 ${className} ${
        darkMode ? "bg-white text-black" : "bg-black text-white"
      }`}
      style={{ marginTop: margin }}
      id={id}
    >
      {children}
    </section>
  );
}
export function SubTitle({ children, zIndex }) {
  return (
    <h2
      className="text-[#717176] font-extrabold text-[16px] z-50 relative"
      style={{ zIndex: zIndex }}
    >
      {children}
    </h2>
  );
}

export function SubTitles({ children, zIndex }) {
  return (
    <h2
      className="text-[#ffff] font-semibold text-[16px] z-50 relative"
      style={{ zIndex: zIndex }}
    >
      {children}
    </h2>
  );
}

export function CoverText({ children, margin, zIndex }) {
  return (
    <h4
      className="text-[#151515] font-extrabold text-[40px] z-0 relative "
      style={{ marginTop: margin, zIndex: zIndex }}
    >
      {children}
    </h4>
  );
}

export function IntroText({ children }) {
  return <p className="pt-5 text-[20px]">{children}</p>;
}
export function P({ children }) {
  return <p className="w-full text-[#838383] mt-4 ">{children}</p>;
}

export function SKillTitle({ children }) {
  return <h6 className=" text-[white] font-bold mt-4 ">{children}</h6>;
}
export function Li({ children, border, onToggleMenu }) {
  <li
    className="font-bold border-b-2 border-[#c9f31d] w-[200px] flex flex-row items-center gap-2 justify-center pb-3"
    style={{ border: border }}
    onClick={onToggleMenu}
  >
    {children}
  </li>;
}
export function Button({ children, backgroundColor, color, className }) {
  return (
    <button
      className={`font-bold  p-3 rounded-[5px] align-center items-center justify-center text-[12px]  ${className} `}
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      {children}
    </button>
  );
}

function App() {
  // Initialisation depuis le localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored ? JSON.parse(stored) : false;
  });

  // Sauvegarde à chaque changement
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const ToggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleToggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <>
      <Navbar
        onToggleMenu={ToggleMenu}
        darkMode={darkMode}
        onToggleTheme={handleToggleTheme}
      />
      <Menu isOpen={isMenuOpen} ToggleMenu={ToggleMenu} darkMode={darkMode} />
      <Section id="home" darkMode={darkMode} className="-mt-8">
        <div className="flex flex-col -mt-12 md:flex-row items-center justify-between gap-8 w-full rounded-[10px] py-4 md:py-16 px-4 md:px-12 bg-gradient-to-br from-[#181818] via-[#232323] to-[#181818] shadow-xl">
          <div className="flex-1 flex flex-col gap-6 items-start">
            <p
              className={`text-xl md:text-2xl font-semibold ${
                darkMode ? "text-[#b8b8b8]" : "text-[#bcbcbc]"
              }`}
            >
              Salut, Je suis
            </p>
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-extrabold ${
                darkMode ? "text-black" : "text-[#f7f7f7]"
              }`}
            >
              Nisan-Galilée Kazadi
            </h1>
            <p className="text-[#c9f31d] text-2xl md:text-3xl font-bold">
              Développeur Web Full Stack
            </p>
            <div className="flex flex-col w-full md:flex-row gap-4 mt-4">
              <Button className="bg-[#c9f31d] text-black text-base px-6 py-3 flex-1 flex items-center justify-center gap-2 hover:bg-[#b6db1a] transition min-w-[200px]">
                <a href="#skills" className="whitespace-nowrap">Commander un projet</a>
                <i className="fas far fa-credit-card"></i>
              </Button>
              <Button
                backgroundColor={darkMode ? "white" : "black"}
                color={darkMode ? "black" : "white"}
                className="border-1 border-gray-500 text-base flex-1 px-6 py-3 flex items-center justify-center gap-2 hover:bg-[#232323] transition min-w-[200px]"
              >
                <a href="#portfolio" className="whitespace-nowrap">Consulter mes projets</a>
                <i className="fas fa-briefcase"></i>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img
              className="rounded-2xl shadow-2xl max-w-xs md:max-w-sm w-full h-auto object-cover transition-transform duration-500
                md:border-4 md:border-[#64ef0f] md:bg-gradient-to-br md:from-[#181818] md:via-[#232323] md:to-[#181818] hover:scale-105"
              src={profileImage}
              alt="profile"
            />
          </div>
        </div>
        <div className="mt-12">
          <div className="flex flex-row md:flex-row w-full justify-center items-center gap-4 md:gap-8 lg:gap-16 xl:gap-24 bg-gradient-to-br from-[#232323] via-[#181818] to-[#232323] rounded-2xl shadow-lg py-6 px-2 md:px-8 mt-8">
            <div className="flex flex-col justify-between items-center text-center flex-1 transition-transform duration-300 hover:scale-105 hover:bg-[#232323]/60 rounded-2xl p-4 md:border-r md:border-[#333] last:md:border-r-2">
              <h4 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-[#c9f31d] drop-shadow-lg">
                1+
              </h4>
              <p
                className={`text-xs md:text-base lg:text-lg xl:text-xl ${
                  darkMode ? "text-[#444]" : ""
                }`}
              >
                Année d'expérience
              </p>
            </div>
            <div className="flex flex-col justify-between items-center text-center flex-1 transition-transform duration-300 hover:scale-105 hover:bg-[#232323]/60 rounded-xl p-4 md:border-r md:border-[#333] last:md:border-r-0">
              <h4 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-[#c9f31d] drop-shadow-lg">
                5+
              </h4>
              <p
                className={`text-xs md:text-base lg:text-lg xl:text-xl ${
                  darkMode ? "text-[#444]" : ""
                }`}
              >
                Projets Achevés
              </p>
            </div>
            <div className="flex flex-col justify-between items-center text-center flex-1 transition-transform duration-300 hover:scale-105 hover:bg-[#232323]/60 rounded-xl p-4">
              <h4 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-[#c9f31d] drop-shadow-lg">
                90%
              </h4>
              <p
                className={`text-xs md:text-base lg:text-lg xl:text-xl ${
                  darkMode ? "text-[#444]" : ""
                }`}
              >
                Clients satisfait
              </p>
            </div>
          </div>
        </div>
      </Section>
      <AboutSection darkMode={darkMode} />
      <ServiceSection darkMode={darkMode} />
      <SkillSection darkMode={darkMode} />
      <PortfolioSection darkMode={darkMode} />
      <TestimonialSection darkMode={darkMode} />
      <ContactSection darkMode={darkMode}>
        <div className="w-full flex justify-center mb-4 md:mb-0">
          <img
            src="/src/images/tonimage.png"
            alt="Contact"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-4 border-[#c9f31d] bg-[#181818] mx-auto"
          />
        </div>
      </ContactSection>
      <Footer darkMode={darkMode} />
    </>
  );
}
export default App;
