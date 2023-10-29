import React from 'react';
import { Htag } from '@/components/Htag/Htag';
import { withLayout } from '@/layout/Layout';

export function Error500(): JSX.Element {
    return (
        <>
            <Htag tag='h1'>Ошибка 500</Htag>
        </>
    );
}

export default withLayout(Error500);
