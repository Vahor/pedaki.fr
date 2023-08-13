import Faq from '~/app/pricing/faq';
import PriceTable from '~/app/pricing/priceTable';
import { PageHeader } from '~/components/PageHeader';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  description: 'lorem ipsum dolor sit amet',
  title: 'Pricing',
};

const PricingPage = () => {
  return (
    <div>
      <PageHeader
        title="Trouve une offre qui te convient"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut iure nisi non nostrum
          possimus repellat suscipit!"
      />
      <PriceTable />
      <Faq />
    </div>
  );
};

export default PricingPage;