import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Carousel } from "./index";
import { Easing } from "../constants/index";
import Image from "next/image";

interface ProductModalProps {
  active: boolean;
  toggleProduct: () => void;
  title: string;
  caption: string;
  tags: { id: string; title: string }[];
  images: { id: string; src: string }[];
}

const carouselContainerMotion = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
      delayChildren: 0.2,
    },
  },
};

const carouselImageContainerMotion = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.8,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const carouselItemMotion = {
  initial: {
    opacity: 0,
    x: -10,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ...Easing,
    },
  },
  exit: {
    opacity: 0,
    x: -10,
  },
};

const carouselImageMotion = {
  initial: {
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    y: -10,
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    y: 0,
    transition: {
      duration: 0.6,
      ...Easing,
    },
  },
  exit: {
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.6,
      ...Easing,
    },
  },
};

const ProductModal: React.FC<ProductModalProps> = ({
  active,
  toggleProduct,
  title,
  caption,
  tags,
  images,
}) => {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
            opacity: 0,
          }}
          animate={{
            clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
            opacity: 1,
          }}
          exit={{
            clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
            opacity: 0,
            transition: {
              delay: 0.5,
              ...Easing,
              duration: 0.6,
            },
          }}
          transition={{ ...Easing, duration: 0.6, delay: 0.1 }}
          className="bg-primary-900 fixed top-0 left-0 w-full h-screen z-10 px-10 py-10 flex flex-col items-center  md:justify-center mx-auto overflow-y-scroll md:overflow-hidden"
        >
          <button onClick={toggleProduct} className="absolute top-6 right-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 511.991 511.991"
              xmlSpace="preserve"
              className="w-6 h-6 fill-current text-white"
            >
              <path d="M286.161 255.867 505.745 36.283c8.185-8.474 7.951-21.98-.523-30.165-8.267-7.985-21.375-7.985-29.642 0L255.995 225.702 36.411 6.118c-8.475-8.185-21.98-7.95-30.165.524-7.985 8.267-7.985 21.374 0 29.641L225.83 255.867 6.246 475.451c-8.328 8.331-8.328 21.835 0 30.165 8.331 8.328 21.835 8.328 30.165 0l219.584-219.584 219.584 219.584c8.331 8.328 21.835 8.328 30.165 0 8.328-8.331 8.328-21.835 0-30.165L286.161 255.867z" />
            </svg>
          </button>
          <div className="w-full lg:max-w-[60rem]">
            <motion.h4
              initial={{
                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                rotate: -12,
                opacity: 0,
                y: -10,
              }}
              animate={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                rotate: 0,
                opacity: 1,
                y: 0,

                transformOrigin: "left",
              }}
              exit={{
                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                rotate: -12,
                opacity: 0,
                y: -10,
              }}
              transition={{ ...Easing, duration: 0.6, delay: 0.2 }}
              className="font-primary text-white text-5xl md:text-8xl text-left"
            >
              {title}
            </motion.h4>
            <div className="mb-4" />
            <motion.p
              initial={{
                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                opacity: 0,
                y: -10,
              }}
              animate={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                opacity: 1,
                y: 0,
                transition: {
                  ...Easing,
                  duration: 0.6,
                  delay: 0.4,
                },
              }}
              exit={{
                clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
                opacity: 0,
                y: -10,
                transition: {
                  ...Easing,
                  duration: 0.6,
                  delay: 0.1,
                },
              }}
              transition={{ ...Easing, duration: 0.6, delay: 0.4 }}
              className="font-secondary text-white text-opacity-80 w-full break-words text-lg md:text-xl text-left"
            >
              {caption}
            </motion.p>
            <div className="mt-5" />
            <Carousel>
              <motion.ul
                variants={carouselContainerMotion}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-row items-center cursor-grab active:cursor-grabbing space-x-2 w-full"
              >
                {tags.map((tag, index) => (
                  <motion.li
                    key={index}
                    variants={carouselItemMotion}
                    className="px-6 py-2 bg-primary-700 text-white rounded-md "
                  >
                    {tag.title}
                  </motion.li>
                ))}
              </motion.ul>
            </Carousel>
            <div className="mt-12">
              <h5 className="font-primary text-white text-4xl">Variations</h5>
              <div className="mb-2" />
              <Carousel>
                <motion.div
                  variants={carouselImageContainerMotion}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex flex-row items-center cursor-grab active:cursor-grabbing space-x-4 w-full"
                >
                  {images.map((image) => (
                    <motion.figure
                      key={image.id}
                      variants={carouselImageMotion}
                      className="h-[200px] w-[300px] relative shrink-0 group overflow-hidden rounded-md"
                    >
                      <Image
                        src={image.src}
                        alt="Salmon Food"
                        layout="fill"
                        width="90%"
                        height="90%"
                        objectFit="cover"
                        className="group-hover:brightness-50 duration-300 transition-all ease-easing"
                      />
                      <figcaption className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/5 rotate-12 group-hover:rotate-0 origin-left opacity-0 transition-all ease-easing duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 font-secondary text-white text-xl text-center">
                        An elephant at sunset
                      </figcaption>
                    </motion.figure>
                  ))}
                </motion.div>
              </Carousel>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
