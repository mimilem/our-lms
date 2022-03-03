import React, { useState, useEffect } from 'react';

import './generalNotifications.css';

import HeaderAndSideNav from '../../../../Components/HeaderAndSideNav';
import SideNavigation from '../../Components/SideNavigation';


function GeneralNotifications() {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('generalNotifications');
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

            <div className='generalNotifications-content' > 
                
                <div 
                    className='staff-pages-header-tilte' 
                    style={{marginLeft: '3rem'}} >
                    General Notifications
                </div>
                
                <hr className='staff-page-hr' />

                <div className='notifications-list-container'>
                    <div 
                        className='add-notification-card'>
                        <div 
                            className='add-notification-icon' 
                            title='Create a Notification'/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default GeneralNotifications;