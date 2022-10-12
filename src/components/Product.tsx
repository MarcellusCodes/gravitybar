import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Easing } from "../constants/index";

export interface ProductProps {
  id?: string;
  title: string;
  caption: string;
  tags: { id: string; title: string }[];
  images?: { id: string; src: string }[];
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

const Product: React.FC<ProductProps> = ({ title, caption, tags }) => {
  return (
    <motion.article
      variants={productMotion}
      className="flex flex-col items-start relative px-4 border rounded-md border-secondary-900 border-opacity-25 py-4"
    >
      <div className="flex flex-row items-center justify-between h-full w-full px-4">
        <div className="space-y-2">
          <h3 className="font-primary text-4xl text-secondary-900">{title}</h3>
          <p className="font-secondary text-lg text-secondary-900 text-opacity-85 max-w-2xl">
            {caption}
          </p>
          <ul className="flex flex-row items-center space-x-2">
            {tags.map((tag, index) => (
              <li className="px-6 py-2 bg-primary-200 rounded-md" key={index}>
                {tag.title}
              </li>
            ))}
          </ul>
          <div className="pt-2"></div>
          <div className="flex flex-row items-center space-x-2">
            <Link href={`/producs/${title}`}>
              <a className="bg-secondary-900 hover:bg-secondary-800 active:bg-secondary-1000 transition-colors easing duration-100 rounded-md font-primary text-primary-50 text-xl px-8 py-3 inline-block">
                Explore
              </a>
            </Link>
            <button
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
                <path d="M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5ZM5 2h14a3 3 0 0 1 3 3v14a2.951 2.951 0 0 1-.3 1.285l-9.163-9.163a5 5 0 0 0-7.072 0L2 14.586V5a3 3 0 0 1 3-3Zm0 20a3 3 0 0 1-3-3v-1.586l4.878-4.878a3 3 0 0 1 4.244 0l9.163 9.164A2.951 2.951 0 0 1 19 22Z" />
                <path d="M16 10.5A3.5 3.5 0 1 0 12.5 7a3.5 3.5 0 0 0 3.5 3.5Zm0-5A1.5 1.5 0 1 1 14.5 7 1.5 1.5 0 0 1 16 5.5Z" />
              </svg>
            </button>

            <button
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
    </motion.article>
  );
};

export default Product;
