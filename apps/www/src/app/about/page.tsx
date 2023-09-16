import AboutUs from '~/app/about/about-us';
import Assets from '~/app/about/assets';
import Naming from '~/app/about/naming';
import News from '~/app/about/news';
import { PageHeader } from '~/components/PageHeader';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  description: 'lorem ipsum dolor sit amet',
  title: 'Company',
};

const CompanyPage = () => {
  return (
    <div>
      <PageHeader
        title="Pedaki"
        description="Page qui regroupe nos assets et informations sur la companie."
      />
      <Naming />
      <AboutUs />
      <Assets />
      <News />
    </div>
  );
};

export default CompanyPage;
