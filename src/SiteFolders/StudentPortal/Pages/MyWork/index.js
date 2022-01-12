import React, { useState }  from 'react';

//import the styling compnent(s).
import './myWork.css';
import '../studentsPages.css';

//import all components that will be 
//displayed on the pages.
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';


function MyWorks() {

    // Initiate a boolean state to check weither 
    // the bar is toggled.
    const [toggledBar, setToggledBar] = useState(false);
    
    const [activeTab, setActiveTab] = useState('myWork');

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

export default MyWorks;