import { Separator } from '@pedaki/design/ui/separator';
import AboutUs from '~/app/about/about-us';
import Assets from '~/app/about/assets';
import Naming from '~/app/about/naming';
import { PageHeader } from '~/components/PageHeader';
import type { Metadata } from 'next';
import React from 'react';
import {pageBaseStyle} from "~/styles/constants";


export const metadata: Metadata = {
  description: 'lorem ipsum dolor sit amet',
  title: 'Company',
};

const CompanyPage = () => {
  return (
    <div className={pageBaseStyle}>
      <PageHeader
        title="A propos de pedaki"
        description="Page qui regroupe nos assets et informations sur pedaki."
      />
      <div className="container mt-8 flex flex-col gap-4">
        <Separator className="bg-gradient-to-r from-gray-50 via-gray-200 to-gray-50 my-4" />
        <AboutUs />

        <Naming />
        <Assets />
      </div>
    </div>
  );
};

export default CompanyPage;