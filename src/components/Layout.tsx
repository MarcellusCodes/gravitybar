import React from "react";
import { Navbar, MobileNavbar } from "./index";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="px-6 sm:px-10 py-6 bg-primary-50 max-w-[1920px] overflow-x-hidden">
      <MobileNavbar />
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
