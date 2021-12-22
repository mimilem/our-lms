/*
    A directory to display one of the two 
    types of navigation.
*/

import React, {useState} from 'react';

// Import the styling component.
import './sideNavigation.css';

// Import the side navigation bars.
import FullSideNavigation from './FullSideNavigation';
import ToggledSideNavigation from './ToggledSideNavigation';


function SideNavigation() {

    // Initiate a boolean state to check weither 
    // the bar is toggled.

    const [toggledBar, setToggledBar] = useState(false);

    return (
    <>
        {
            toggledBar === false ? 
                <FullSideNavigation/> : <ToggledSideNavigation/> 
        }
    </>
    );
}

export default SideNavigation;