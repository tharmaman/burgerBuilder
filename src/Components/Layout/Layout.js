import React from 'react';
import Aux from '../../hocs/Aux';

const layout = ({ children }) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {children}
        </main>
    </Aux>
);

export default layout;
