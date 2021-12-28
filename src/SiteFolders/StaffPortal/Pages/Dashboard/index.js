import React, {useState} from 'react';

//import the styling compnent(s).
import './dashboard.css';
import '../staffPages.css';

//import all components that will be 
//displayed on the pages.
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';



function StaffDashboard() {

    // Initiate a boolean state to check weither 
    // the bar is toggled.
    const [toggledBar, setToggledBar] = useState(false);

    return (
        <div className="staff-pages-container">

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

            <div className='staff-pages-content'>
                This is the Dashboard<br/>
            </div>
        </div>
    );
}

export default StaffDashboard;