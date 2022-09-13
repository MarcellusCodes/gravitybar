import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Easing } from "../constants/index";
import { Branding } from "./index";

interface MobileNavbarProps {
  children?: React.ReactNode;
}

const MobileNavbar: React.FC<MobileNavbarProps> = () => {
  const [open, setOpen] = useState(false);

  const handleNavigation = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className="md:hidden grid grid-cols-2">
        <AnimatePresence>
          {open && (
            <motion.div
              transition={{ ...Easing, duration: 0.6 }}
              initial={{ clipPath: "circle(3% at 50% 50%", opacity: 0 }}
              animate={{ clipPath: "circle(100% at 90.5% 5.5%)", opacity: 1 }}
              exit={{ clipPath: "circle(3% at 50% 50%)", opacity: 0 }}
              className="fixed bg-tertiary-900 bg-opacity-25 h-screen w-full top-0 left-0"
            ></motion.div>
          )}
        </AnimatePresence>
        <Branding />
        <ul className="justify-self-end z-10">
          <li>
            <motion.button
              onClick={handleNavigation}
              className="p-3 border-2 border-secondary-900 rounded-full hover:bg-tertiary-900 transition-colors duration-300 group bg-opacity-25"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <motion.rect
                  className="fill-current group-hover:text-primary-50"
                  initial={{ rotate: 0 }}
                  animate={{ x: open ? 100 : 0 }}
                  transition={{ ...Easing, duration: 0.6 }}
                  y={11}
                  width={24}
                  height={2}
                  rx={1}
                />
                <motion.rect
                  className="fill-current group-hover:text-primary-50"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
                  transition={{ ...Easing, duration: 0.6 }}
                  y={4}
                  width={24}
                  height={2}
                  rx={1}
                />
                <motion.rect
                  className="fill-current group-hover:text-primary-50"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
                  transition={{ ...Easing, duration: 0.6 }}
                  y={18}
                  width={24}
                  height={2}
                  rx={1}
                />
              </motion.svg>
            </motion.button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNavbar;
