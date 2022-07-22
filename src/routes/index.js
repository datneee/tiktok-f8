import { HeaderOnly } from '~/components/Layouts';

import React from 'react';
import { Home, Following, Upload, Profile } from '~/pages';

export const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/@:nickname',
        component: Profile,
    },
];

export const privateRoutes = [];
