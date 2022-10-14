import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { Easing } from "../constants/index";
import { ProductModal, Tag } from "./index";

export interface ProductProps {
  id?: string;
  title: string;
  caption: string;
  tags: { id: string; title: string }[];
  images: { id: string; src: string }[];
  type: "card" | "image";
}

const productMotion = {
  initial: {
    opacity: 0,
    rotate: -12,
  },
  animate: {
    transformOrigin: "right",
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ...Easing,
    },
  },
};

const productAnimate = {
  initial: {
    x: 0,
    opacity: 1,
  },
  animate: {
    x: "-100%",
    opacity: 0,
  },
};

const Product: React.FC<ProductProps> = ({ title, caption, tags, images }) => {
  const [active, setActive] = useState(false);

  const toggleProduct = () => {
    setActive((prev) => !prev);
  };

  return (
    <>
      <motion.article variants={productMotion} className="min-h-[318px]">
        <ProductModal
          active={active}
          toggleProduct={toggleProduct}
          title={title}
          caption={caption}
          tags={tags}
          images={images}
        />
        <motion.div
          variants={productAnimate}
          initial="initial"
          animate={active ? "animate" : "initial"}
          transition={{ ...Easing, duration: 0.6 }}
          className="flex flex-col items-start relative px-4 border rounded-md border-secondary-900 border-opacity-25 py-4 h-full"
        >
          <div className="flex flex-row items-center justify-between h-full w-full px-4">
            <div className="space-y-2">
              <h3 className="font-primary text-4xl text-secondary-900">
                {title}
              </h3>
              <p className="font-secondary text-[1.1rem] text-secondary-900 text-opacity-85 max-w-2xl">
                {caption}
              </p>
              <ul className="flex flex-row items-center space-x-2">
                {tags.map((tag, index) => (
                  <li key={index}>
                    <Tag title={tag.title} slug={tag.title}  />
                  </li>
                ))}
              </ul>
              <div className="pt-2"></div>
              <div className="flex flex-row items-center space-x-2">
                <Link href={`/products/${title}`}>
                  <a className="bg-secondary-900 hover:bg-secondary-800 active:bg-secondary-1000 transition-colors easing duration-100 rounded-md font-primary text-primary-50 text-xl px-8 py-3 inline-block">
                    Explore
                  </a>
                </Link>
                <button
                  onClick={toggleProduct}
                  className="
              hover:bg-secondary-800 active:bg-secondary-1000
              group
              bg-transparent
              border-2 border-secondary-900
              transition-colors
              easing
              duration-100
              rounded-md
              font-primary
              text-primary-50
              text-xl
              px-3
              py-3
              inline-block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="fill-current text-secondary-900 w-6 h-6 group-hover:text-primary-50 group-active:text-primary-50 transition-colors easing duration-100"
                  >
                    <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Z" />
                    <path d="M12 10h-1a1 1 0 0 0 0 2h1v6a1 1 0 0 0 2 0v-6a2 2 0 0 0-2-2Z" />
                    <circle cx={12} cy={6.5} r={1.5} />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.article>
    </>
  );
};

export default Product;
