"use server";

import { StyledLink } from "@pedaki/design/ui/styled-link";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@pedaki/design/ui/tooltip";
import { cn } from "@pedaki/design/utils";
import { getScopedI18n } from "~/locales/server";
import type { MonitoringStatus } from "~/services/betterstack/status";
import { getMonitoringStatus } from "~/services/betterstack/status";
import React from "react";

const StatusMap: Record<MonitoringStatus, string> = {
	degraded: "bg-yellow-base",
	downtime: "bg-red-base",
	operational: "bg-green-base",
	unknown: "bg-neutral-500",
};

const StatusCircle = ({ status }: { status: MonitoringStatus }) => {
	const statusColor = StatusMap[status];

	return (
		<span className="relative flex h-2.5 w-2.5">
			<span
				className={cn(
					"absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
					statusColor,
				)}
			/>
			<span
				className={cn(
					"relative inline-flex h-2.5 w-2.5 rounded-full",
					statusColor,
				)}
			/>
		</span>
	);
};

const Status = async () => {
	const status = await getMonitoringStatus();
	const footerT = await getScopedI18n("components.footer");

	return (
		<TooltipProvider delayDuration={0}>
			<Tooltip>
				<TooltipTrigger asChild>
					<StyledLink
						href="https://status.pedaki.fr"
						prefetch={false}
						variant="gray"
						className="flex items-baseline gap-2"
					>
						<StatusCircle status={status} />
						<span>{footerT("status.label")}</span>
					</StyledLink>
				</TooltipTrigger>
				<TooltipContent side="top" align="center">
					{footerT(`status.types.${status}`)}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};

export default Status;
