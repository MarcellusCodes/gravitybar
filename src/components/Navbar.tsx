import React from "react";
import { NavItem, Branding } from "./index";

interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <>
      <nav className="hidden md:grid grid-cols-3 place-items-center font-primary">
        <ul className="hidden md:flex flex-row items-center space-x-4 justify-self-start">
          <NavItem title="Products" href="/products" />
          <NavItem title="Ambiance" href="#ambiance" />
          <NavItem title="Reservate" href="/reservate" />
        </ul>
        <Branding />
        <ul className="hidden md:flex flex-row items-center space-x-4 justify-self-end">
          <NavItem title="About" href="#about" />
          <NavItem title="Contact" href="/contact" />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
