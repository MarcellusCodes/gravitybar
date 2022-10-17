import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Easing } from "../constants/index";
import Image from "next/image";
import { Carousel } from "../components/index";

const chooseContainerMotion = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const chooseButtonMotion = {
  initial: {
    opacity: 0,
    x: "100%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ...Easing,
    },
  },
};

const eventItems = [
  {
    id: "1",
    title: "Dinner for Two",
    imgSrc: "/ambience-two.jpg",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6 fill-current text-red-600"
      >
        <path d="M17.5 1.917a6.4 6.4 0 0 0-5.5 3.3 6.4 6.4 0 0 0-5.5-3.3A6.8 6.8 0 0 0 0 8.967c0 4.547 4.786 9.513 8.8 12.88a4.974 4.974 0 0 0 6.4 0c4.014-3.367 8.8-8.333 8.8-12.88a6.8 6.8 0 0 0-6.5-7.05Z" />
      </svg>
    ),
  },
  {
    id: "2",
    title: "Birthday Party",
    imgSrc: "/ambience-birthday.jpg",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        className="w-6 h-6 fill-current text-yellow-600"
      >
        <path d="M20,7H18.262A5.137,5.137,0,0,0,20,3a1,1,0,0,0-2,0c0,2.622-2.371,3.53-4.174,3.841A9.332,9.332,0,0,0,15,3,3,3,0,0,0,9,3a9.332,9.332,0,0,0,1.174,3.841C8.371,6.53,6,5.622,6,3A1,1,0,0,0,4,3,5.137,5.137,0,0,0,5.738,7H4a4,4,0,0,0-4,4v1a2,2,0,0,0,2,2v5a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V14a2,2,0,0,0,2-2V11A4,4,0,0,0,20,7ZM12,2a1,1,0,0,1,1,1,7.71,7.71,0,0,1-1,3.013A7.71,7.71,0,0,1,11,3,1,1,0,0,1,12,2ZM2,11A2,2,0,0,1,4,9h7v3H2Zm2,8V14h7v8H7A3,3,0,0,1,4,19Zm16,0a3,3,0,0,1-3,3H13V14h7Zm-7-7V9h7a2,2,0,0,1,2,2v1Z" />
      </svg>
    ),
  },
  {
    id: "3",
    title: "Family Dinner",
    imgSrc: "/ambience-family.jpg",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        className="w-6 h-6 fill-current text-yellow-900"
      >
        <path d="M17.5 24a5.772 5.772 0 0 1-4.719-2.238A4.341 4.341 0 0 0 9 20c-4.794 0-9-4.673-9-10A10.011 10.011 0 0 1 10 0c9.772 0 14 11.588 14 17.5a6.508 6.508 0 0 1-6.5 6.5ZM10 2C-.468 2.379-.38 17.105 9 18a6.3 6.3 0 0 1 5.242 2.4c2.336 3.251 7.858 1.173 7.758-2.9C22 12.938 18.547 2 10 2ZM6.707 13.707l7-7a1 1 0 0 0-1.414-1.414l-7 7a1 1 0 0 0 1.414 1.414Zm4 2 6-6a1 1 0 0 0-1.414-1.414l-6 6a1 1 0 0 0 1.414 1.414Zm4 2 4-4a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 1.414 1.414Zm4 2 1-1a1 1 0 0 0-1.414-1.414l-1 1a1 1 0 0 0 1.414 1.414Zm-13-11 3-3a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 1.414 1.414Z" />
      </svg>
    ),
  },
  {
    id: "4",
    title: "Company Event",
    imgSrc: "/ambience-company.jpg",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6 fill-current text-secondary-900"
      >
        <path d="M19 4h-1.1A5.009 5.009 0 0 0 13 0h-2a5.009 5.009 0 0 0-4.9 4H5a5.006 5.006 0 0 0-5 5v10a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V9a5.006 5.006 0 0 0-5-5Zm-8-2h2a3 3 0 0 1 2.816 2H8.184A3 3 0 0 1 11 2ZM5 6h14a3 3 0 0 1 3 3v3H2V9a3 3 0 0 1 3-3Zm14 16H5a3 3 0 0 1-3-3v-5h9v1a1 1 0 0 0 2 0v-1h9v5a3 3 0 0 1-3 3Z" />
      </svg>
    ),
  },
];

const EventType: React.FC = () => {
  const [filter, setFilter] = useState("");
  const [focused, setFocused] = useState(null);
  return (
    <div>
      <h3 className="font-primary text-secondary-900 text-5xl text-center">
        Choose your event type
      </h3>
      <div className="mt-12" />
      <div className="flex flex-col xl:flex-row xl:items-center justify-center">
        <Carousel>
          <motion.ul
            initial="initial"
            whileInView="animate"
            exit="exit"
            viewport={{ once: true, margin: "0px 0px -150px 0px" }}
            variants={chooseContainerMotion}
            className="flex flex-row xl:flex-col items-end w-full xl:w-none xl:items-start xl:justify-center xl:space-y-4 space-x-4 xl:space-x-0 mb-8 pt-12 xl:pt-0 xl:mb-0 xl:pl-12"
          >
            {eventItems.map((item) => (
              <li
                key={item.id}
                className="shrink-0 xl:shrink min-w-min border-b border-l border-t border-r rounded-tr-md rounded-br-md xl:rounded-br-none xl:rounded-tr-none xl:border-r-none relative xl:after:content-[''] xl:after:h-full after:w-1 xl:after:absolute xl:after:top-1/2 xl:after:-right-1 xl:after:-translate-y-1/2 xl:after:bg-white rounded-tl-md rounded-bl-md border-secondary-900 p-2 font-secondary text-xl xl:text-3xl xl:w-full font-light"
              >
                <motion.button
                  variants={chooseButtonMotion}
                  onFocus={() => setFocused(item.id)}
                  onMouseEnter={() => setFocused(item.id)}
                  onClick={() => {
                    setFilter(item.imgSrc);
                  }}
                  tabIndex={0}
                  className="relative z-10"
                >
                  <AnimatePresence exitBeforeEnter>
                    {item.imgSrc === filter ? (
                      <motion.span
                        layoutId="icon"
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 0 }}
                        transition={{ ...Easing, duration: 0.6 }}
                        className="text-2xl absolute inline-block -top-12 -translate-x-1/2 xl:top-0 xl:-translate-x-0 xl:-left-12 z-10"
                      >
                        {item.icon}
                      </motion.span>
                    ) : null}
                  </AnimatePresence>
                  {focused === item.id ? (
                    <motion.div
                      transition={{
                        layout: {
                          duration: 0.3,
                          transition: { ...Easing },
                        },
                      }}
                      style={{ backgroundColor: "rgba(38, 40, 43, .2)" }}
                      className="w-full h-full z-0 bg-secondary-900  absolute top-0 left-0 rounded-md"
                      layoutId="highlight"
                    />
                  ) : null}
                  {item.title}
                </motion.button>
              </li>
            ))}
          </motion.ul>
        </Carousel>

        <div className="border rounded-md border-secondary-900 p-4">
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={filter}
              initial={{
                opacity: 0,
                rotate: -12,
              }}
              whileInView={{ rotate: 0, opacity: 1 }}
              exit={{ opacity: 0, rotate: -12 }}
              viewport={{ once: true, margin: "0px 0px -300px 0px" }}
              transition={{ ...Easing, duration: 0.6 }}
              className="h-[400px] w-full xl:h-[600px] xl:w-[800px] bg-secondary-200 rounded-md overflow-hidden relative shadow-primary"
            >
              <Image
                src={filter === "" ? "/ambience.jpg" : filter}
                layout="fill"
                objectFit="cover"
                alt="Ambience"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default EventType;
