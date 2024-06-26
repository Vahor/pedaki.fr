"use client";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@pedaki/design/ui/navigation-menu";
import { cn } from "@pedaki/design/utils";
import { navigation } from "~/config/navigation";
import { useScopedI18n } from "~/locales/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Desktop = () => {
	const navT = useScopedI18n("components.header.navigation");

	const pathname = usePathname();
	return (
		<NavigationMenu>
			<NavigationMenuList>
				{navigation.map((item) => {
					const isActive =
						item.children?.some((subitem) => subitem.href === pathname) ??
						false;
					return (
						<NavigationMenuItem key={item.id}>
							<>
								<NavigationMenuTrigger
									className="bg-white font-medium"
									data-active={isActive}
								>
									{navT(`${item.id}.label`)}
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
										{item.children.map((subitem) => {
											const isChildrenActive = pathname === subitem.href;

											return (
												<ListItem
													href={subitem.href}
													title={navT(
														// biome-ignore lint/suspicious/noExplicitAny: Type is hard to get, but is correct
														`${item.id}.children.${subitem.id}.label` as any,
													)}
													key={navT(
														// biome-ignore lint/suspicious/noExplicitAny: Type is hard to get, but is correct
														`${item.id}.children.${subitem.id}.label` as any,
													)}
													data-active={isChildrenActive}
												>
													{navT(
														// biome-ignore lint/suspicious/noExplicitAny: Type is hard to get, but is correct
														`${item.id}.children.${subitem.id}.description` as any,
													)}
												</ListItem>
											);
										})}
									</ul>
								</NavigationMenuContent>
							</>
						</NavigationMenuItem>
					);
				})}
			</NavigationMenuList>
		</NavigationMenu>
	);
};

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<Link
					ref={ref}
					href={href!}
					className={cn(
						"group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none hover:bg-weak/50 focus:bg-weak focus:text-soft data-[active=true]:bg-weak/50",
						className,
					)}
					{...props}
				>
					<div className="text-p-sm font-medium leading-none group-hover:text-primary-base">
						{title}
					</div>
					<p className="line-clamp-2 text-p-xs leading-snug text-sub">
						{children}
					</p>
				</Link>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

export default Desktop;
