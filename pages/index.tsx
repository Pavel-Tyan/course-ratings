import { withLayout } from '../layout/Layout';
import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';
import { API } from '@/helpers/api';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Home({ menu, firstCategory }: HomeProps): JSX.Element {
    return <></>;
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
        firstCategory,
    });
    return {
        props: {
            menu,
            firstCategory,
        },
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}
