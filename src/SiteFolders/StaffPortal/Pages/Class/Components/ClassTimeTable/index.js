import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import HeaderAndSideNav from '../../../../Components/HeaderAndSideNav';
import ClassHeader from '../ClassHeader';


function ClassTimeTable(props) {

    const [tabContent, setTabContent] = useState('timeTable')

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(true);
    const [activeTab, setActiveTab] = useState('department');

    let location = useLocation();

    return (
        <div className="staff-pages-container">

            <HeaderAndSideNav 
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab} />

            <div className='staff-pages-content'>
                <ClassHeader  tabContent={tabContent} location={location} />

                <div className='class-page-content'>
                    <h1 className='not-available-msg'>Not Yet Available</h1>
                </div>
            </div>            
        </div>
    );
}

export default ClassTimeTable;