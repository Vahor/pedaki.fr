import Faq from '~/app/pricing/faq';
import PriceHeader from '~/app/pricing/header';
import PriceTable from '~/app/pricing/priceTable';
import React from 'react';

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