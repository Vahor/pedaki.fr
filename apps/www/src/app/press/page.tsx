import { PageHeader } from '~/components/PageHeader';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    description: 'lorem ipsum dolor sit amet',
    title: 'Press',
};

const PressPage = () => {
    return (
        <div>
            <PageHeader
                title="Press"
                description="Page qui regroupe nos assets et communiqués de presse."
            />
        </div>
    );
};

export default PressPage;
