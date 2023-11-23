import React, { useContext, useEffect, useState } from "react";
// Sidebar Context
import { SideBarContext } from "../contexts/SidebarContext";
// cart context
import { CartContext } from "../contexts/CartContext";
// İmport icons
import { BsBag } from "react-icons/bs";
// import Link
import { Link } from "react-router-dom";
// İmport Logo
import Logo from "../img/logo.svg";
const Header = () => {
  // Header State
  const [isActive, setİsActive] = useState(true);
  const { setİsOpen, isOpen } = useContext(SideBarContext);
  const { itemAmount } = useContext(CartContext);
  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setİsActive(true) : setİsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6 "
      } fixed w-full z-10 transition-all`}
    >
      <div className="flex  mx-auto container items-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <img
              className=" w-[40px]
          "
              src={Logo}
              alt=""
            />
          </div>
        </Link>

        {/* Cart */}
        <div
          className="cursor-pointer flex relative "
          onClick={() => setİsOpen(!isOpen)}
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
