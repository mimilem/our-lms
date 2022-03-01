import React, { useState, useEffect } from 'react';

import './generalDetails.css';

import HeaderAndSideNav from '../../../../Components/HeaderAndSideNav';
import SideNavigation from '../../Components/SideNavigation';


function GeneralDetails() {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('generalDetails');
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
                choosedCampus={choosedCampus}/>

            <SideNavigation 
                generalToggledBar={generalToggledBar} 
                setGeneralToggledBar={setGeneralToggledBar}
                activeTab={activeTab} />

            <div className='generalDetails-content' > 
                <div 
                    className='staff-pages-header-tilte' 
                    style={{marginLeft: '3rem'}} >
                    General Details
                </div>
                <hr className='staff-page-hr' />
                
                <div className='generalDetails-institution-name-container'>
                    <div className='generalDetails-institution-name'>
                        Vinco-eLearning
                    </div>
                    <div className='generalDetails-institution-edit-icon' />
                </div>

                <div className='generalDetails-input-container'>
                    <div className='generalDetails-label'>Adress:</div>
                    <input 
                        type='text' 
                        className='generalDetails-input'/>
                </div>
                <div className='generalDetails-input-container'>
                    <div className='generalDetails-label'>Email:</div>
                    <input 
                        type='text' 
                        className='generalDetails-input'/>
                </div>
                <div className='generalDetails-input-container'>
                    <div className='generalDetails-label'>Phone:</div>
                    <input 
                        type='text' 
                        className='generalDetails-input'/>
                </div>

                <div className='btn-generalDetails-container'>
                    <button className='btn-generalDetails-cancel'>Cancel</button>
                    <button className='btn-generalDetails-save'>Save</button>
                </div>

                <div className='generalDetails-stats-container'>
                    <div>
                        Total number of campuses: <b>2</b>
                    </div>
                    <div>
                        Total number of departments: <b>2</b>
                    </div>
                    <div>
                        Total number of Staff: <b>85</b>
                    </div>
                    <div>
                        Total number of Students: <b>1115</b>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GeneralDetails;