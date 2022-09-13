import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Easing } from "../constants/index";

interface NavItemProps {
  href: string;
  title: string;
}

const navItemMotion = {
  initial: {
    scaleY: 0,
    x: 0,
    y: 0,
    transformOrigin: "top",
  },
  animate: {
    scaleY: 0,
    x: 0,
    y: 0,
    transformOrigin: "top",
  },
  hover: {
    scaleY: [0, 1, 0.5],
    transformOrigin: "top",
  },
};

const NavItem: React.FC<NavItemProps> = ({ href, title }) => {
  return (
    <motion.li
      initial="initial"
      animate="animate"
      whileHover="hover"
      className=" text-secondary-900 text-xl relative font-medium border-l-2 border-secondary-400 pl-1"
    >
      <motion.span
        className="absolute  w-full h-full bg-tertiary-900 bg-opacity-25"
        variants={navItemMotion}
        transition={{ ...Easing }}
      ></motion.span>
      <Link href={href} passHref>
        <a>{title}</a>
      </Link>
    </motion.li>
  );
};

export default NavItem;
