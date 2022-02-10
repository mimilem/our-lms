
// This is the dashboard page component 
// of the student portal.

import React, { useEffect, useState } from 'react';

//import the styling compnent(s).
import '../studentsPages.css';

//import all components that will be 
//displayed on the pages.
import DashboardProfife from './Components/Profile';
import HeaderAndSideNav from '../../Components/HeaderAndSideNav';
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

            <HeaderAndSideNav
                toggledBar={toggledBar}
                setToggledBar={setToggledBar}
                activeTab={activeTab}
                setActiveTab={setActiveTab} />

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