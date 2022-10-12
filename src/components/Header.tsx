import React from "react";

import { Easing } from "../constants/index";
import { Text } from "./index";
import {
  motion,
  useSpring,
} from "framer-motion";
import {
  useRefViewportScroll,
  useViewportTransform,
} from "framed-scroll-motion";

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
  const [ref, inputRange] = useRefViewportScroll([-0.2, 0.5, 0.7]);
  const y = useViewportTransform(inputRange, [1.1, -0.2, 0]);
  const scale = useSpring(useViewportTransform(inputRange, [-0.2, 2, 0.8]), {
    stiffness: 400,
    damping: 90,
  });
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
        ref={ref}
        transition={{ ...Easing }}
        style={{ y, scale }}
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
