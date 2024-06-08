import { CONTENT } from "../constants";
import { useState } from "react";
import close from '../assets/images/close.svg'
import menu from '../assets/images/menu.svg'
import Logo from "../components/Logo";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { navs } = CONTENT

  return (
    <nav className="w-full z-10 flex justify-between items-center absolute left-0 top-0 bg-transparent">
      {/* Logo */}
      <Logo />

      {/* List of links */}
      <ul className="list-none md:flex hidden justify-end items-center flex-1">
        {navs.map((nav, index) => (
          <li
            key={nav.link}
            className={`font-poppins
            font-semibold
            cursor-pointer
            text-[16px]
            hover:text-[#5b86cd] sm:mr-6 text-dark_primary`}
          >
            <a key={nav.link+index} href={`${nav.link}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* only for mobile devices*/}
      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mr-4 cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? "opacity-1" : "opacity-0"} p-4 bg-dark_primary
        absolute top-20 right-0 mx-4 my-0
        min-w-[140px] rounded-xl sidebar duration-800 transition-all ease-out`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navs.map((nav, index) => (
              <li
                key={`${nav.link} mobile`}
                className={`font-poppins
                font-normal
                cursor-pointer
                text-[16px]
                text-center
                ${index === navs.length - 1 ? "mb-0" : "mb-4"}
                text-white w-full`}
                onClick={()=>setToggle(!toggle)}
              >
                <a key={`${nav.link} ${index} mobile`} href={`${nav.link}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;