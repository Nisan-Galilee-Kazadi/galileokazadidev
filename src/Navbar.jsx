import "../src/App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const A = ({ Children }) => {
  <a href="" className="text-white">
    {Children}
  </a>;
};

const Navbar = ({ onToggleMenu, darkMode }) => {
  return (
    <header
      className={`fixed top-0 w-full flex flex-row items-center justify-between px-3 py-4 shadow-[#c9f31d] shadow-sm z-[300] transition-colors duration-300
        ${darkMode ? "bg-white text-black" : "bg-black text-white"}
      `}
    >
      <div
        id="logo"
        className={`text-[16px] font-semibold as:pb-10 ${
          darkMode ? "text-black" : "text-white"
        }`}
      >
        <span
          className={`text-[18px] font-bold ${
            darkMode ? "text-[#c9f31d]" : "text-[#c9f31d]"
          }`}
        >
          #DCS
        </span>
        portfolio
      </div>
      <div
        className={`flex flex-row justify-between gap-2 ${
          darkMode ? "text-black" : "text-white"
        }`}
      >
        <a
          className={darkMode ? "text-black" : "text-white"}
          href="https://m.facebook.com/nissanniska.kazadi"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          className={darkMode ? "text-black" : "text-white"}
          href="https://x.com/GalileoKazadi45"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          className={darkMode ? "text-black" : "text-white"}
          href="https://wa.me/+2432081180"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <a
          className={darkMode ? "text-black" : "text-white"}
          href="https://www.linkedin.com/in/galil%C3%A9e-kazadi-4112a833b/"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          className={darkMode ? "text-black" : "text-white"}
          href="https://github.com/Nisan-Galilee-Kazadi"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className="flex flex-row justify-between gap-3">
        {/* <div className="  flex flex-row  mt-1 justify-between gap-1 as:pb-10">
          {/* <div className="">
            {!darkMode ? (
              <i
                id="LightI"
                className="fas fa- cursor-pointer"
                onClick={onToggleTheme}
              ></i>
            ) : (
              <i
                id="DarkI"
                className="fas fa-moon cursor-pointer"
                onClick={onToggleTheme}
              ></i>
            )}
          </div> 
        </div> */}
        <div
          id="MenuButton"
          className={`border-1 p-1 px rounded-[5px] ${
            darkMode ? "border-black" : "border-white"
          }`}
        >
          <i className="fas fa-bars" onClick={onToggleMenu}></i>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
