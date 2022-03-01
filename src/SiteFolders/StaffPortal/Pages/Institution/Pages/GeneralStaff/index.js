import React, { useState, useEffect } from 'react';

import './generalStaff.css';

import HeaderAndSideNav from '../../../../Components/HeaderAndSideNav';
import SideNavigation from '../../Components/SideNavigation';
import GeneralStaffList from './Components/GeneralStaffList';


function GeneralStaff(props) {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('generalStaff');
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
            
            <div className='generalStaff-content' > 
                <div 
                    className='staff-pages-header-tilte' 
                    style={{marginLeft: '3rem'}} >
                    General Staff
                </div>
                <hr className='staff-page-hr' />

                <div className='add-users-icon'/>
            
                <div>
                    <input
                        placeholder='username'
                        className='users-input'
                    />

                    <input
                        placeholder='Code'
                        className='users-input'
                    />

                    <button type='submit'>Confirm</button>
                </div>
                
                <GeneralStaffList />
            
            </div>
        </div>
    );
}

export default GeneralStaff;