import React, { useState, useEffect } from 'react';

import './generalEvents.css';

import HeaderAndSideNav from '../../../../Components/HeaderAndSideNav';
import SideNavigation from '../../Components/SideNavigation';


function GeneralEvents() {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('generalEvents');
    const [choosedCampus, setChoosedCampus] = useState(false);

    const [generalToggledBar, setGeneralToggledBar] = useState(false);

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <div className='campus-page-content'>

            <HeaderAndSideNav 
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab}
                choosedCampus={choosedCampus} />

            <SideNavigation 
                generalToggledBar={generalToggledBar} 
                setGeneralToggledBar={setGeneralToggledBar}
                activeTab={activeTab} />

            <div className='generalEvent-content' > 
                
                <div 
                    className='staff-pages-header-tilte' 
                    style={{marginLeft: '3rem'}} >
                    General Events
                </div>
                
                <hr className='staff-page-hr' />

                <div className='event-list-container'>
                    <div 
                        className='add-event-card'>
                        <div 
                            className='add-event-icon' 
                            title='Create an event'/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default GeneralEvents;