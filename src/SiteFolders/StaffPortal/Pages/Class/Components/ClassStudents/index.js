import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './classStudents.css';
import '../classComponent.css';

import ClassHeader from '../ClassHeader';
import HeaderAndSideNav from '../../../../Components/HeaderAndSideNav';


function ClassStudents() {

    
    const [tabContent, setTabContent] = useState('students')
    
    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(true);
    const [activeTab, setActiveTab] = useState('department');
    
    let location = useLocation();
    console.log(location)

    let locations = location.state.departmentDetails

    let moduleDetails = {
        id: location.state.moduleDetails.id,
        moduleName: location.state.moduleDetails.moduleName
    }

    return (

        <div className="staff-pages-container">

            <HeaderAndSideNav
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab} />

            <div className='staff-pages-content'>

                <ClassHeader tabContent={tabContent} locations={locations} moduleDetails={moduleDetails} />

                <div className='class-page-content'>
                    
                    <div className='second-title'>
                        Students taking this module
                    </div>
                    
                    <ol>
                        <li className='student-list-element' style={{marginBottom: '15px'}}>
                            <div className='student-name'><b>No.</b></div>
                            <div className='student-name'><b>Full Name</b></div>
                            <div className='student-number'><b>Student Number</b></div>
                        </li>
                        <li className='student-list-element'>
                            <div className='student-name'>1.</div>
                            <div className='student-name'>Nephthali Roselyn Salam</div>
                            <div className='student-number'>5135468541</div>
                        </li>
                        {/* remove button */}
                        {/* <div className='remove-from-list'>Remove</div> */}
                            
                        <li className='student-list-element'>
                            <div className='student-name'>2.</div>
                            <div className='student-name'>Elon Musk</div>
                            <div className='student-number'>5135468541</div>
                        </li>
                        {/* remove button */}
                        {/* <div className='remove-from-list'>Remove</div> */}

                        <li className='student-list-element'>
                            <div className='student-name'>3.</div>
                            <div className='student-name'>Van Der Leyen</div>
                            <div className='student-number'>5135468541</div>
                        </li>
                        {/* remove button */}
                        {/* <div className='remove-from-list'>Remove</div> */}
                    </ol>
                
                </div>
            </div>

        </div>
    );
}

export default ClassStudents;