import React, { useEffect, useState } from 'react';

import './academicCalendar.css';

import HeaderAndSideNav from '../../../../Components/HeaderAndSideNav';
import SideNavigation from '../../Components/SideNavigation';


function AcademicCalendar() {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('academicCalendar');
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

            <div className="academicCalendar-content">

                <div 
                    className='staff-pages-header-tilte' 
                    style={{marginLeft: '3rem'}} >
                    Academic Calendar
                </div>
                <hr className='staff-page-hr' />

                <div style={{marginLeft: '4rem'}}>
                    <div className='accCalendar-year'>Academic year: 2022</div>
                    <input
                        type='file'
                        className='upload-accCalendar-file'
                    />
                    <div style={{display: 'flex'}}>
                        <div className='accCalendar-file-view'>
                            <div className='accCalendar-file-img'/>
                            <div className='accCalendar-file-title'>
                                title.pdf
                            </div>
                        </div>
                        <button className='accCalendar-file-btn'>Upload</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AcademicCalendar;