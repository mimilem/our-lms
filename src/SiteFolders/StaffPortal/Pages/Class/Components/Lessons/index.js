import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

//import the styling compnent(s).
import './lessons.css'; 
import '../classComponent.css';

//import all components that will be 
//displayed on the page.
import ClassHeader from '../ClassHeader';
import HeaderAndSideNav from '../../../../Components/HeaderAndSideNav';


function Lessons() {

    const [tabContent, setTabContent] = useState('lessons');
    const [chosedModule, setChosedModule] = useState(true);

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(true);
    const [activeTab, setActiveTab] = useState('department');

    let location = useLocation();
    
    const qualificationDetails = {
        qualificationId: location.state.qualificationDetails.qualificationId,
        departmentId: location.state.qualificationDetails.departmentId,
        qualificationName: location.state.qualificationDetails.qualificationName,
        qualificationLevel: location.state.qualificationDetails.qualificationLevel,
        qualificationYear: location.state.qualificationDetails.qualificationYear,
    }
    
    const moduleDetail =  location.state.moduleDetail ? ({
        id: location.state.moduleDetail.id,
        classID: location.state.moduleDetail.classID,
        moduleName: location.state.moduleDetail.moduleName,
    })
    : location.state.moduleDetails ? (
    {
        id: location.state.moduleDetails.id,
        classID: location.state.moduleDetails.classID,
        moduleName: location.state.moduleDetails.moduleName,
    }) :[]

    return (

        <div className="staff-pages-container">

            <HeaderAndSideNav
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab} />

            <div className='staff-pages-content'>

                <ClassHeader 
                    tabContent={tabContent}
                    chosedModule={chosedModule} 
                    moduleDetails={moduleDetail} 
                    qualificationDetails={qualificationDetails} />

                <div className='class-page-content'>

                    <div className='title'>{moduleDetail.moduleName}</div>

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

                </div>
            </div>
        </div>
    );
}

export default Lessons;