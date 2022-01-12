/*

    A directory to display one of the two 
    types of navigation.

*/

import React from 'react';

// Import the styling component(s).
import './sideNavigation.css';

// Import the side navigation bar(s).
import FullSideNavigation from './FullSideNavigation';


function SideNavigation({toggledBar, setToggledBar, activeTab}) {

    return (
        <div className='sideNav-container'>
            <FullSideNavigation 
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar} 
                activeTab={activeTab} />  
        </div>
    );
}

export default SideNavigation;