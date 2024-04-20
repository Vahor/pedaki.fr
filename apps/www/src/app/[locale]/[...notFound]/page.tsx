import { getScopedI18n } from "~/locales/server";
import type { LocaleCode } from "~/locales/server";
import { setStaticParamsLocale } from "~/locales/utils";

export const generateMetadata = async ({
	params,
}: { params: { locale: LocaleCode } }) => {
	setStaticParamsLocale(params.locale);
	const notFoundT = await getScopedI18n("pages.notFound");

	return {
		title: { absolute: notFoundT("metadata.title") },
		description: notFoundT("metadata.description"),
	};
};

export default async function NotFound({
	params,
}: { params: { locale: string } }) {
	setStaticParamsLocale(params.locale);
	const notFoundT = await getScopedI18n("pages.notFound");

	return (
		<section>
			<div className="flex flex-col items-center justify-center gap-4 px-4 pt-16 md:pt-32">
				<h1>{notFoundT("title")}</h1>
			</div>
		</section>
	);
}
