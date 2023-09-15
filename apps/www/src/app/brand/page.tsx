import AboutUs from '~/app/brand/about-us';
import Assets from '~/app/brand/assets';
import Naming from '~/app/brand/naming';
import News from '~/app/brand/news';
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