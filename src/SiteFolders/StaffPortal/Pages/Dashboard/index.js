import React, {useState} from 'react';

import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';

import './dashboard.css';


function StaffDashboard() {

    // Initiate a boolean state to check weither 
    // the bar is toggled.
    const [toggledBar, setToggledBar] = useState(false);

    return (
        <div className="staff-dashboard-container">

                <Header />

                <div 
                    className={
                        toggledBar === false ? 
                            'full-side-navigation-container' 
                            : 
                            'toggled-side-navigation-container' 
                    }>
                    <SideNavigation 
                        toggledBar={toggledBar} 
                        setToggledBar={setToggledBar} />
                </div>

            <div className='staff-dashboard-content'>
                This is the Dashboard<br/>
            </div>
        </div>
    );
}

export default StaffDashboard;