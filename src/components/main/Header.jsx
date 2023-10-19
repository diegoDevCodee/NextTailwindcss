"use client";

import { useState } from "react";
import { BiMenu, BiPlus } from "react-icons/bi";

function Header() {
  const [menuIcon, setMenuIcon] = useState(false);

  const handleSmallerScreenNav = () => {
    setMenuIcon(!menuIcon);
  };

  const closeMenu = () => {
    setMenuIcon(false);
  };

  return (
    <>
      <header className="bg-teal-700 text-gray-200 sticky top-0 z-10">
        <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-medium ">
            <a href="#hero">🚀 Acme Rockets</a>
          </h1>
          <div className="transition-all duration-300 delay-500">
            <button
              onClick={handleSmallerScreenNav}
              className="text-3xl md:hidden cursor-pointer"
            >
              {menuIcon ? (
                <BiPlus size={30} className="text-[#f1f1f1] hover:scale-110 rotate-90" />
              ) : (
                <BiMenu size={25} className="text-[#f1f1f1] hover:scale-110" />
              )}
            </button>
            <nav
              className="hidden md:block space-x-8 text-xl"
              aria-label="main"
            >
              <a href="#rockets" className="hover: opacity-90">
                Our Rockets
              </a>
              <a href="#testimonials" className="hover: opacity-90">
                Testimonials
              </a>
              <a href="#contact" className="hover: opacity-90">
                Contact Us
              </a>
            </nav>
          </div>
        </section>

        <div
          className={`${
            menuIcon ? "menu-visible" : "menu-hidden"
          } bg-slate-200/[0.98] dark:bg-zinc-950/[0.98] text-gray-900 dark:text-slate-200 min-h-screen w-full absolute py-10 font-semibold`}
        >
          <a
            href="#"
            onClick={closeMenu}
            className="cursor-pointer text-2xl sm:text-3xl hover:bg-slate-100/95 hover:text-gray-950 w-full block text-center py-6 uppercase"
          >
            Home
          </a>
          <a
            href="#rockets"
            onClick={closeMenu}
            className="cursor-pointer text-2xl sm:text-3xl hover:bg-slate-100/95 hover:text-gray-950 w-full block text-center py-6 uppercase"
          >
            Our Rockets
          </a>
          <a
            href="#testimonials"
            onClick={closeMenu}
            className="cursor-pointer text-2xl sm:text-3xl hover:bg-slate-100/95 hover:text-gray-950 w-full block text-center py-6 uppercase"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="cursor-pointer text-2xl sm:text-3xl hover:bg-slate-100/95 hover:text-gray-950 w-full block text-center py-6 uppercase"
          >
            Contact
          </a>
          <a
            href="#"
            onClick={closeMenu}
            className="cursor-pointer text-2xl sm:text-3xl hover:bg-slate-100/95 hover:text-gray-950 w-full block text-center py-6 uppercase"
          >
            About Us
          </a>
          <a
            href="#"
            onClick={closeMenu}
            className="cursor-pointer text-2xl sm:text-3xl hover:bg-slate-100/95 hover:text-gray-950 w-full block text-center py-6 uppercase"
          >
            Legal
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
