import { HeaderOnly } from '~/components/Layouts';

import React from 'react';
import { Home, Following, Upload } from '~/pages';

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
];

export const privateRoutes = [];
