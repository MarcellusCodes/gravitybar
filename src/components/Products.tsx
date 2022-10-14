import React from "react";
import { ProductProps } from "./Product";
import { Product } from "./index";
import { motion } from "framer-motion";
import Image from "next/image";
import { Easing } from "../constants/index";

interface ProductsProps {
  products?: ProductProps[];
}

const productsMotion = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={productsMotion}
      viewport={{ once: true, margin: "0px 0px -350px 0px" }}
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
    >
      {products.map((product) =>
        product.type === "card" ? (
          <Product
            key={product.id}
            title={product.title}
            caption={product.caption}
            tags={product.tags}
            type={product.type}
            images={product.images}
          />
        ) : (
          <motion.div
            variants={productMotion}
            className="relative rounded-md overflow-hidden shadow-primary min-h-[318px]"
          >
            <Image
              src="/salmon.jpg"
              layout="fill"
              objectFit="cover"
              alt="Food preview"
            />
          </motion.div>
        )
      )}
    </motion.div>
  );
};

export default Products;
