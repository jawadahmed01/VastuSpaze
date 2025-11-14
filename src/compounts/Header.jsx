import { useState } from "react";
import { LINKS } from "../constants/index.js";
import Logo from "../assets/logo.webp";

function Header() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(null);

  function toggleMenu() {
    setMenu(!menu);
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-3">
          <div className="max-w-[130px] lg:max-w-[200px]">
            <a href="/"><img src={Logo} alt="Logo" /></a>
          </div>

          <nav
            className={`
              flex flex-col lg:flex-row gap-3 lg:gap-4 p-5
              absolute lg:static top-full right-0 left-0
              bg-black text-white lg:bg-transparent lg:text-black
              overflow-hidden transition-all duration-300
              ${menu ? "block" : "hidden lg:block"}
            `}
          >
            {LINKS.map((item, index) => (
              <a
                href={item.link}
                key={index}
                onClick={() => setActive(item.link)}
                className={`
                  py-2 px-3 transition-all duration-300
                  ${active === item.link ? "bg-black text-white" : "lg:text-black text-white"}
                  lg:hover:text-white lg:hover:bg-black
                  hover:bg-white hover:text-black
                `}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex lg:hidden" onClick={toggleMenu}>
            <i className="ri-menu-line text-2xl cursor-pointer"></i>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
