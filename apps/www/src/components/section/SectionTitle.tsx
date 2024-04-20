import Link from "next/link";
import React from "react";

interface SectionTitleProps {
	children: string;
	anchor: string;
}

const SectionTitle = ({ children, anchor }: SectionTitleProps) => {
	return (
		<Link
			href={`#${anchor}`}
			id={anchor}
			className="text-gray-900 block pb-2 text-title-2 font-bold sm:text-title-3"
		>
			<h3>{children}</h3>
		</Link>
	);
};

export default SectionTitle;
