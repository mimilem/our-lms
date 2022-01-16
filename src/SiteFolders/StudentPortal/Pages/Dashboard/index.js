
// This is the dashboard page component 
// of the student portal.

import React, { useEffect, useState } from 'react';

//import the styling compnent(s).
import '../studentsPages.css';

//import all components that will be 
//displayed on the pages.
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';
import DashboardProfife from './Components/Profile';
import QuickLinks from './Components/QuickLinks';


function StudentsDashboard() {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('dashboard');

    //Set the document title of the page when it loads.
    useEffect(() => {
        document.title = "Dashboard | Vinco-elearning"
     }, []);

    return (
        <div className="students-pages-container">

            <Header />

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
                    activeTab={activeTab} />
            </div>

            <div className='students-pages-content'>
                <div className='students-pages-header-tilte'>Students Dashboard</div>
                <hr className='students-page-hr'/>
                <DashboardProfife />
                <QuickLinks />
            </div>
        </div>
    );
}

export default StudentsDashboard;