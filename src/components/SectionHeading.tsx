import { motion } from "framer-motion";
import React from "react";
import { Title, Text } from "./index";
import { Easing } from "../constants/index";

interface SectionHeadingProps {
  caption: string;
  title: string;
}

const SectionHeadingMotion = {
  initial: (rotate: string) => ({
    opacity: 0,
    y: 10,
    rotate: rotate,
  }),
  animate: {
    opacity: 1,
    rotate: 0,
    y: 0,
  },
  leftOrigin: {
    transformOrigin: "left",
  },
  rightOrigin: {
    transformOrigin: "right",
  },
};

const SectionHeadingTransition = {
  ...Easing,
  duration: 0.6,
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ caption, title }) => {
  return (
    <div className="flex flex-col-reverse xl:flex-row justify-between mt-28 sm:mt-52 mb-16">
      <motion.div
        custom={12}
        variants={SectionHeadingMotion}
        initial="initial"
        whileInView={["animate", "leftOrigin"]}
        viewport={{ once: true, margin: "0px 0px -350px 0px" }}
        transition={SectionHeadingTransition}
        className="text-left max-w-xl self-end mt-8 xl:mt-0"
      >
        <Text>{caption}</Text>
      </motion.div>
      <motion.div
        custom={-12}
        className="text-right"
        variants={SectionHeadingMotion}
        initial="initial"
        whileInView={["animate", "rightOrigin"]}
        viewport={{ once: true, margin: "0px 0px -300px 0px" }}
        transition={SectionHeadingTransition}
      >
        <Title>{title}</Title>
      </motion.div>
    </div>
  );
};

export default SectionHeading;
