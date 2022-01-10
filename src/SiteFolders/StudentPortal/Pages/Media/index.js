import React, {useEffect, useState}  from 'react';
import { Link } from 'react-router-dom';

//import the styling compnent(s).
import '../studentsPages.css';

//import all components that will be 
//displayed on the pages.
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';


function StudentMedia() {

    // Initiate a boolean state to check weither 
    // the bar is toggled.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('media');

    return (
        <div className='students-pages-container'>
            
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
                    setToggledBar={setToggledBar}
                    activeTab={activeTab} />
            </div>

            <div className='students-pages-content'>
                <h1 className='not-available-msg'>Not Yet Available</h1>
            </div>
        </div>
    );
}

export default StudentMedia;