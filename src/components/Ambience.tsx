import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { Easing } from "../constants/index";

interface AmbienceProps {
  imgSrc: string;
  className: string;
}

const Ambience: React.FC<AmbienceProps> = ({ imgSrc, className }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,

        rotate: -12,
      }}
      whileInView={{ rotate: 0, opacity: 1 }}
      transition={{ ...Easing, duration: 0.6 }}
      viewport={{ once: true, margin: "0px 0px -300px 0px" }}
      className={`h-[500px] origin-right relative shadow-primary overflow-hidden rounded-md ${className}`}
    >
      <Image
        src={imgSrc}
        alt="Ambience Showcase"
        layout="fill"
        objectFit="cover"
      />
    </motion.div>
  );
};

export default Ambience;
