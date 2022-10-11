import React from "react";

import { Easing } from "../constants/index";
import { Text } from "./index";
import {
  useScroll,
  motion,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

const headingContainerMotion = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const headerItemMotion = {
  initial: {
    opacity: 0,
    rotate: 12,
    y: 10,
  },
  animate: {
    opacity: 1,
    rotate: 0,
    transformOrigin: "left",
    y: 0,
    transition: {
      duration: 0.6,
      ...Easing,
    },
  },
};

const Header: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [-200, 500, 700], [100, -200, 0]);
  const scale = useSpring(
    useTransform(scrollY, [-200, 500, 700, 900, 1100], [1, 1.2, 2, 1.2, 1]),
    {
      stiffness: 400,
      damping: 90,
    }
  );

  return (
    <header className="pt-28 sm:pt-52">
      <div className="flex flex-col space-y-8 xl:space-y-0 xl:flex-row justify-between">
        <motion.h1
          initial="initial"
          animate="animate"
          variants={headingContainerMotion}
          className="font-primary text-5xl md:text-7xl 2xl:text-8xl text-secondary-900"
        >
          <motion.span className="block" variants={headerItemMotion}>
            We serve you modern
          </motion.span>
          <motion.span className="block" variants={headerItemMotion}>
            cuisine that gravitates
          </motion.span>
          <motion.span className="block" variants={headerItemMotion}>
            your taste
          </motion.span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, rotate: -12, y: 10 }}
          animate={{
            opacity: 1,
            rotate: 0,
            transformOrigin: "right",
            y: 0,
          }}
          transition={{ ...Easing, delay: 0.15, duration: 0.6 }}
          className="text-right max-w-xl self-end"
        >
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
            ipsam, ullam quos iusto magnam laudantium accusantium suscipit
            veniam. Deleniti saepe molestias quaerat, exercitationem at nemo
            minus similique sit debitis recusandae?
          </Text>
        </motion.div>
      </div>
      <div className="mt-16" />
      <motion.video
        transition={{ ...Easing }}
        style={{ y: y, scale: scale }}
        playsInline
        autoPlay
        muted
        loop
        className="w-full aspect-video"
      >
        <source src="/intro.mp4" />
      </motion.video>
    </header>
  );
};

export default Header;
