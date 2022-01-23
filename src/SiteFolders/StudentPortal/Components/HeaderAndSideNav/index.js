import React from 'react';

import Header from '../Header';
import SideNavigation from '../../Components/SideNavigation';


function HeaderAndSideNav({
    toggledBar, 
    setToggledBar, 
    activeTab, 
    campusDetails, 
    facultyDetails, 
    signOut
}) {
    return (
            <div>
                <Header campusDetails={campusDetails} signOut={signOut} />
                
                {/* Set conditions to display the full or toggle side navigation */}
                <div 
                    className={
                        toggledBar === false ? 
                        'full-side-navigation-container' 
                        : 
                        'toggled-side-navigation-container' 
                    }>
                    <SideNavigation 
                        toggledBar={toggledBar} 
                        setToggledBar={setToggledBar} 
                        activeTab={activeTab} 
                        campusDetails={campusDetails}
                        facultyDetails={facultyDetails} />
                </div>
            </div>
    );
}

export default HeaderAndSideNav;