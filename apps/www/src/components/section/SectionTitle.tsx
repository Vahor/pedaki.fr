import Link from 'next/link';
import React from 'react';

interface SectionTitleProps {
  children: string;
  anchor: string;
}

const SectionTitle = ({ children, anchor }: SectionTitleProps) => {
  return (
    <Link href={`#${anchor}`} id={anchor} className="text-xl font-bold text-gray-900 sm:text-2xl pb-2 block">
      <h3>{children}</h3>
    </Link>
  );
};

export default SectionTitle;