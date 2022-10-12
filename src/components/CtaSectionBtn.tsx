import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface CtaSectionBtnProps {
  title: string;
  link: string;
}

const CtaSectionBtn: React.FC<CtaSectionBtnProps> = ({ title, link }) => {
  return (
    <motion.div className="flex flex-row items-center mt-16 -ml-4 sm:-ml-10">
      <div className="h-[2px] bg-secondary-900 w-[100px]"></div>
      <Link href={link}>
        <a className="bg-transparent hover:bg-secondary-800 active:bg-secondary-1000 transition-colors easing duration-100 border-2 hover:text-primary-50 active:text-primary-50 border-secondary-900 rounded-full font-primary text-2xl w-[200px] h-[200px] flex items-center justify-center shrink-0">
          {title}
        </a>
      </Link>
      <svg
        className="h-[150px] w-full -mr-10 -ml-[6px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 108h128V69h128v42h128V51h256V12h128v63h128V58h128v88h128V58h128V20h128v63h128V28h128v56h128V55h128"
          fill="none"
          strokeLinecap="square"
          stroke="#26282b"
          strokeWidth={2}
        />
      </svg>
    </motion.div>
  );
};

export default CtaSectionBtn;
