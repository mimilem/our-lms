import React, { useState, useEffect } from 'react';

import './generalFees.css';

import HeaderAndSideNav from '../../../../Components/HeaderAndSideNav';
import SideNavigation from '../../Components/SideNavigation';


function GeneralFees(props) {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('generalFees');
    const [choosedCampus, setChoosedCampus] = useState(false);

    const [generalToggledBar, setGeneralToggledBar] = useState(false);

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <div className="campus-page-content">

            <HeaderAndSideNav 
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab}
                choosedCampus={choosedCampus} />

            <SideNavigation 
                generalToggledBar={generalToggledBar} 
                setGeneralToggledBar={setGeneralToggledBar}
                activeTab={activeTab} />

            <div className="generalFees-content">

                <div 
                    className='staff-pages-header-tilte' 
                    style={{marginLeft: '3rem'}} >
                    General Fees
                </div>
                <hr className='staff-page-hr' />

                <div style={{marginLeft: '4rem'}}>
                    <div className='generalFees-year'>Academic year: 2022</div>
                    <input
                        type='file'
                        className='upload-generalFees-file'
                    />
                    <div style={{display: 'flex'}}>
                        <div className='generalFees-file-view'>
                            <div className='generalFees-file-img'/>
                            <div className='generalFees-file-title'>
                                title.pdf
                            </div>
                        </div>
                        <button className='generalFees-file-btn'>Upload</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GeneralFees;