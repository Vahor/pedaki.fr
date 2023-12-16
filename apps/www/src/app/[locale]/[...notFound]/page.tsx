import { getScopedI18n, type LocaleCode } from '~/locales/server';
import { fallbackLocale, locales } from '~/locales/shared';
import { setStaticParamsLocale } from 'next-international/server';

export const generateMetadata = async ({ params }: { params: { locale: LocaleCode } }) => {
  setStaticParamsLocale(locales.includes(params.locale) ? params.locale : fallbackLocale);
  const notFoundT = await getScopedI18n('pages.notFound');

  return {
    title: { absolute: notFoundT('metadata.title') },
    description: notFoundT('metadata.description'),
  };
};

export default async function NotFound({ params }: { params: { locale: string } }) {
  setStaticParamsLocale(locales.includes(params.locale) ? params.locale : fallbackLocale);
  const notFoundT = await getScopedI18n('pages.notFound');

  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-4 px-4 pt-16 md:pt-32">
        <h1>{notFoundT('title')}</h1>
      </div>
    </section>
  );
}
