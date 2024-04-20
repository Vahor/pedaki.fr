import { PageHeader } from "~/components/PageHeader";
import { getScopedI18n } from "~/locales/server";
import type { LocaleCode } from "~/locales/server";
import { setStaticParamsLocale } from "~/locales/utils";
import { pageBaseStyle } from "~/styles/constants";
import React from "react";

export const generateMetadata = async ({
	params,
}: { params: { locale: LocaleCode } }) => {
	setStaticParamsLocale(params.locale);
	const termsT = await getScopedI18n("pages.termsOfService");

	return {
		title: termsT("metadata.title"),
		description: termsT("metadata.description"),
	};
};

const TermsOfService = async ({ params }: { params: { locale: string } }) => {
	setStaticParamsLocale(params.locale);
	const termsT = await getScopedI18n("pages.termsOfService");

	return (
		<div className={pageBaseStyle}>
			<PageHeader
				title={termsT("header.title")}
				description={termsT("header.description")}
			/>
		</div>
	);
};

export default TermsOfService;
