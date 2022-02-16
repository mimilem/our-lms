import React, { useState, useEffect } from 'react';

//import the styling compnent(s).
import './dashboard.css';
import '../staffPages.css';

//import all components that will be 
//displayed on the pages.
import HeaderAndSideNav from '../../Components/HeaderAndSideNav';


function StaffDashboard() {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('dashboard');

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <div className="staff-pages-container">

            <HeaderAndSideNav
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab} />

            <div className='staff-pages-content'>
                <div className='staff-pages-header-tilte'>Admin Dashboard</div>
                <hr className='staff-page-hr'/>

                <div className='gradient-blue-card-container'>
                    <div className='top-left-text'>Faculty</div>
                    <div className='top-right-text'><div className='more-icon'/></div>
                </div>
                <div className='gradient-blue-card-container'>
                    <div className='top-left-text'>Time Table</div>
                    <div className='top-right-text'><div className='more-icon'/></div>
                </div>
            </div>
        </div>
    );
}

export default StaffDashboard;