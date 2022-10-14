import Link from "next/link";
import React from "react";

interface TagProps {
  id: string;
  title: string;
  slug: string;
}

const Tag: React.FC<TagProps> = ({ title, slug }) => {
  return (
    <Link href={`/categories/${slug}`} passHref>
      <a className="px-6 py-2 bg-primary-200 ease-easing hover:bg-primary-300 active:bg-primary-400 duration-100 transition-colors rounded-md">
        {title}
      </a>
    </Link>
  );
};

export default Tag;
