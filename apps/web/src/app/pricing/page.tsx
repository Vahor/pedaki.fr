import PriceHeader from '~/app/pricing/header';
import PriceTable from '~/app/pricing/priceTable';
import React from 'react';
import Faq from "~/app/pricing/faq";

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