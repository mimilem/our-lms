/*

    A directory to display one of the two 
    types of navigation.

*/

import React from 'react';

// Import the styling component.
import './sideNavigation.css';

// Import the side navigation bars.
import FullSideNavigation from './FullSideNavigation';


function SideNavigation({ 
    toggledBar, 
    setToggledBar, 
    activeTab, 
    campusDetails,
    choosedCampus
}) {

    return (
        <div className='sideNav-container'>
            <FullSideNavigation 
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab}
                campusDetails={campusDetails}
                choosedCampus={choosedCampus} /> 
        </div>
    );
}

export default SideNavigation;