import React from "react";
import { ProductProps } from "./Product";
import { Product } from "./index";
import { motion } from "framer-motion";

interface ProductsProps {
  products: ProductProps[];
}

const productsMotion = {
  animate: {
    transition: {
      staggerChildren: 0.1,
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
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {products.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          caption={product.caption}
          tags={product.tags}
        />
      ))}
    </motion.div>
  );
};

export default Products;
