import React from "react";
import Logo from "./logo";
import Navigation from "./navigation";

const Header = () => {
	return (
		<>
			<div>
				{/* Grid bg */}
				<div
					aria-hidden
					className="absolute inset-x-0 top-0 z-[-1] mx-auto h-96 bgi-grid-dashed-neutral-200/100"
					style={{
						backgroundPositionX: "-16px",
					}}
				>
					<div className="relative h-full w-full">
						<div className="absolute inset-0 top-32 mx-auto bg-gradient-to-b from-transparent to-white to-95%"></div>
					</div>
				</div>

				<div className="pt-8"></div>
			</div>
			<header className="container sticky inset-x-0 top-2 z-50 h-16 px-0">
				<div className="container mx-auto flex w-full max-w-screen-xl items-center justify-center md:w-max">
					<div
						className="relative flex w-full flex-col rounded-lg bg-white px-4 py-2 shadow-xl"
						id="header"
					>
						<div className="flex justify-between gap-4">
							<Logo />
							<Navigation />
						</div>
						<div id="mobile-target"></div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
