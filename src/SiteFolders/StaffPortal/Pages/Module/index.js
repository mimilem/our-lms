import React, {useState} from 'react';

import './module.css';

import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';


function Module() {

    // Initiate a boolean state to check weither 
    // the bar is toggled.
    const [toggledBar, setToggledBar] = useState(false);

    return (
        <div  className="staff-module-container">
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
                
            <div className='staff-module-content'>
                Display The Module
            </div>
        </div>
    );
}

export default Module;