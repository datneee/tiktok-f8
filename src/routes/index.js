import { HeaderOnly } from '~/components/Layouts';
import config from '~/config';

import React from 'react';
import { Home, Following, Upload, Profile } from '~/pages';

export const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
];

export const privateRoutes = [];
