import Comparing from '~/app/pricing/comparing';
import PriceHeader from '~/app/pricing/header';
import PriceTable from '~/app/pricing/priceTable';
import React from 'react';

const PricingPage = () => {
  return (
    <div>
      <PriceHeader />
      <PriceTable />
      <Comparing />
    </div>
  );
};

export default PricingPage;