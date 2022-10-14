import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    if (carousel.current) {
      setCarouselWidth(
        carousel.current.scrollWidth - carousel.current.offsetWidth
      );
    }
  }, []);

  return (
    <div ref={carousel} className="overflow-hidden">
      <motion.div drag="x" dragConstraints={{ right: 0, left: -carouselWidth }}>
        {children}
      </motion.div>
    </div>
  );
};

export default Carousel;
