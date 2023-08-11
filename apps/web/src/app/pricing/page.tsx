import Faq from '~/app/pricing/faq';
import PriceHeader from '~/app/pricing/header';
import PriceTable from '~/app/pricing/priceTable';
import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    description: "lorem ipsum dolor sit amet",
    title: "Pricing",
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
