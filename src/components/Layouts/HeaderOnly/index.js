import React from 'react';

import Header from '~/components/Layouts/components/Header';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </>
    );
}

export default DefaultLayout;
