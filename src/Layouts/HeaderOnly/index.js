import React from 'react';

import Header from '~/Layouts/components/Header';

function HeaderOnly({ children }) {
    return (
        <>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </>
    );
}

export default HeaderOnly;
