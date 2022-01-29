import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './lessons.css'; 
import '../classComponent.css';

import ClassHeader from '../ClassHeader';
import HeaderAndSideNav from '../../../../Components/HeaderAndSideNav';


function Lessons() {

    const [tabContent, setTabContent] = useState('lessons')

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(true);
    const [activeTab, setActiveTab] = useState('department');

    let location = useLocation();

    let locations = location.state.departmentDetails

    console.log(location)

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

                    <div className='title'>{moduleDetails.moduleName}</div>

                    <div className='chapter-semester-container'>
                        <div className='first-subtitle'>First Semester</div>

                        <div className="chapter-container">
                            <div className='exams-calendar-tilte'>
                                Chapter I : Fundamental of accounting
                            </div>
                            <div className='add-a-material'>
                                Add a material <br/>
                                <input type='file'/>
                            </div>
                            <div className='add-a-material'>
                                Add a test document<br/>
                                <input type='file'/>
                            </div>
                        </div>
                    </div> 

                    <div className='chapter-semester-container'>
                        <div className='first-subtitle'>Second Semester</div>

                        <div className="chapter-container">
                            <div className='exams-calendar-tilte'>
                                Chapter I : Fundamental of accounting
                            </div>
                            <div className='add-a-material'>
                                Add a material<br/>
                                <input type='file'/>
                            </div>
                            <div className='add-a-material'>
                                Add a test document<br/>
                                <input type='file'/>
                            </div>
                        </div>
                    </div> 

                </div>
            </div>
        </div>
    );
}

export default Lessons;