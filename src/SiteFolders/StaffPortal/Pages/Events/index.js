import React, { useState }  from 'react';
import { useLocation } from 'react-router-dom';

//import the styling compnent(s).
import './events.css';
import '../staffPages.css';

//import all components that will be 
//displayed on the pages.
import HeaderAndSideNav from '../../Components/HeaderAndSideNav';


function Events() {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('media');
    const [choosedCampus, setChoosedCampus] = useState(true);

    let location = useLocation()

    const campusId = location.state.campusID

    return (
        <div className='staff-pages-container'>
            
            <HeaderAndSideNav
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab}
                choosedCampus={choosedCampus}
                campusId={campusId} />

            <div className='staff-pages-content'>
                <div className='staff-pages-header-tilte'>Media</div>
                
                <hr className='staff-page-hr' />
            
            </div>
        </div>
    );
}

export default Events;