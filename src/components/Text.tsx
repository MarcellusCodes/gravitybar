import React from "react";

interface TextProps {
  children: React.ReactNode;
  classNames?: string;
}

const Text: React.FC<TextProps> = ({ children, classNames }) => {
  return (
    <p
      className={`font-secondary text-lg md:text-xl text-secondary-900 text-opacity-85 ${classNames}`}
    >
      {children}
    </p>
  );
};

export default Text;
