import React from "react";
import { Navbar, MobileNavbar } from "./index";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="p-6 bg-primary-50">
      <MobileNavbar />
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
