import { IconChevronRight } from "@pedaki/design/ui/icons";
import { cn } from "@pedaki/design/utils";
import React from "react";

interface AnimatedChevronRightProps {
	className?: string;
}

export const AnimatedChevronRight = ({
	className,
}: AnimatedChevronRightProps) => {
	return (
		<>
			<IconChevronRight
				className={cn(
					"relative left-0 inline h-4 w-4 text-primary-base transition-all group-hover:left-0.5",
					className,
				)}
			/>
		</>
	);
};
