import React from "react";

interface TitleProps {
  children: React.ReactNode;
  classNames?: string;
}

const Title: React.FC<TitleProps> = ({ children, classNames }) => {
  return (
    <h2
      className={`font-primary text-5xl md:text-7xl 2xl:text-8xl text-secondary-900 ${classNames}`}
    >
      {children}
    </h2>
  );
};

export default Title;
