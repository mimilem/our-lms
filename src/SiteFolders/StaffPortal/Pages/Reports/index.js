import React, {useEffect, useState}  from 'react';

//import the styling compnent(s).
import './reports.css';
import '../staffPages.css';

//import all components that will be 
//displayed on the pages.
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';
import HeaderAndSideNav from '../../Components/HeaderAndSideNav';


function Reports() {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('reports');

    return (
        <div className='staff-pages-container'>
            
            <HeaderAndSideNav 
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab} />

            <div className='staff-pages-content'>
                <div className='staff-pages-header-tilte'>Reports</div>
                
                <hr className='staff-page-hr' />
            
            </div>
        </div>
    );
}

export default Reports;