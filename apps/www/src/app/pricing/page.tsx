import Faq from '~/app/pricing/faq';
import PriceHeader from '~/app/pricing/header';
import PriceTable from '~/app/pricing/priceTable';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  description: 'lorem ipsum dolor sit amet',
  title: 'Pricing',
};

const PricingPage = () => {
  return (
    <div>
      <PriceHeader />
      <PriceTable />
      <Faq />
    </div>
  );
};

export default PricingPage;
