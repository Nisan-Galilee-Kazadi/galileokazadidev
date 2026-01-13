import { Section } from "./App";
import "../src/App.css";

const Li = ({ children, border, ToggleMenu }) => (
  <li
    className="font-bold border-b-2 border-[#647b05] w-[200px] flex flex-row items-center gap-2 justify-center pb-3"
    style={{ border: border }}
    onClick={ToggleMenu}
  >
    {children}
  </li>
);

function Menu({ isOpen, ToggleMenu, darkMode }) {
  return (
    <Section margin={"-200px"} darkMode={darkMode}>
      <nav
        id="navMenu"
        className={`fixed top-10 left-0 right-0 shadow-md transform transition-transform duration-300 ease-in-out p-1 rounded-[10px] z-60 gap-8
          ${isOpen ? " -translate-y-100 " : "translate-y-10 "}
          ${darkMode ? "bg-[#1a1a1a] text-black" : "bg-[#647b05] text-black"}
        `}
      >
        <ul
          className={`flex flex-col gap-3 w-full items-center p-2 rounded-[8px] 
          ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}
        >
          <a href="#home" onClick={ToggleMenu}>
            <Li className="">
              <i className="fas fa-home"></i> Acceuil
            </Li>
          </a>
          <a href="#about" onClick={ToggleMenu}>
            <Li className="item" onclick="changeStyle(this)">
              <i className="fas fa-user"></i> Àpropos{" "}
            </Li>
          </a>
          <a href="#service" onClick={ToggleMenu}>
            <Li className="item" onclick="changeStyle(this)">
              <i className="fas fas fa-tools"></i> Service
            </Li>
          </a>
          <a href="#skills" onClick={ToggleMenu}>
            <Li class="item" onclick="changeStyle(this)">
              <i className="fas fa-database"></i> Skills
            </Li>
          </a>
          <a href="#portfolio" onClick={ToggleMenu}>
            <Li className="item" onclick="changeStyle(this)">
              <i className="fas fa-briefcase"></i> Portfolio
            </Li>
          </a>
          <a href="#testimoniale" onClick={ToggleMenu}>
            <Li className="item" onclick="changeStyle(this)">
              <i className="fas far fa-comment-dots"></i> Notes
            </Li>
          </a>
          <a href="#contact" onClick={ToggleMenu}>
            <Li
              className="border-none"
              border={"none"}
              onclick="changeStyle(this)"
            >
              <i className="fas fa-message"></i> Contact
            </Li>
          </a>
        </ul>
      </nav>
    </Section>
  );
}
export default Menu;
