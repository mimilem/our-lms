/*

    A directory to display one of the two 
    types of navigation.

*/

import React from 'react';

// Import the styling component.
import './instituteSideNav.css';

// Import the side navigation bars.
import FullSideNavigation from './FullSideNavigation';


function SideNavigation({generalToggledBar, setGeneralToggledBar, activeTab}) {

    return (
        <div className='institution-sideNav-container'>
            <FullSideNavigation
                generalToggledBar={generalToggledBar} 
                setGeneralToggledBar={setGeneralToggledBar}
                activeTab={activeTab} /> 
        </div>
    );
}

export default SideNavigation;