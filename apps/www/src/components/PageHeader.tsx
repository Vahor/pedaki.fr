import { cn } from "@pedaki/design/utils";
import React from "react";
import { Balancer } from "react-wrap-balancer";

interface PageHeaderProps {
	title: string;
	description?: string;
	withPadding?: boolean;
	titleClassName?: string;
}

export const PageHeader = ({
	title,
	description,
	withPadding = true,
	titleClassName,
}: PageHeaderProps) => {
	return (
		<div
			className={cn(
				"flex flex-col items-center justify-center gap-4",
				withPadding && wrapperClassName,
			)}
		>
			<Balancer
				as="h1"
				className={cn(
					"text-center text-[72px] text-title-2 font-bold text-main",
					titleClassName,
				)}
			>
				{title}
			</Balancer>
			{description && description.length > 0 && (
				<div className="max-w-md md:max-w-xl">
					{/* z-[2] is required as we use a blur hack in PriceTable */}
					<Balancer
						as="h2"
						className="text-base md:text-lg relative z-[2] text-center leading-7 text-soft"
					>
						{description}
					</Balancer>
				</div>
			)}
		</div>
	);
};

export const wrapperClassName = "mx-4 mt-12";
