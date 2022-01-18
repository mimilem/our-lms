import React, {useEffect, useState}  from 'react';
import { Link } from 'react-router-dom';

//import the styling compnent(s).
import '../studentsPages.css';

//import all components that will be 
//displayed on the pages.
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';
import HeaderAndSideNav from '../../Components/HeaderAndSideNav';


function StudentMedia() {

    // Initiate a boolean state to check weither 
    // the bar is toggled.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('media');

    return (
        <div className='students-pages-container'>
            
            <HeaderAndSideNav
                toggledBar={toggledBar}
                setToggledBar={setToggledBar}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <div className='students-pages-content'>
                <h1 className='not-available-msg'>Not Yet Available</h1>
            </div>
        </div>
    );
}

export default StudentMedia;