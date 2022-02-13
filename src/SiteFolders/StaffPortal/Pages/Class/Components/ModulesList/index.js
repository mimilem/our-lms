import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import the amplify API and components to handle the 
// requests.
import { API, graphqlOperation } from "aws-amplify";
import { listClassModules } from '../../../../../../graphql/queries';
import * as mutations from '../../../../../../graphql/mutations';

//import the styling compnent(s).
import './module-list.css';

import ClassHeader from '../ClassHeader';
import HeaderAndSideNav from '../../../../Components/HeaderAndSideNav';


function ModulesList() {

    const [tabContent, setTabContent] = useState('modules')
    const [chosedModule, setChosedModule] = useState(false)

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(true);
    const [activeTab, setActiveTab] = useState('department');

    // State to keep and update the input value when the admin create 
    // an instance.
    const [moduleNameInputValue, setModuleNameInputValue] = useState('')
    // Initial state to display the pop-out screens. 
    const [showCreateModule, setShowCreateModule] = useState(false)
    //used to create new ClassModule
    const [classModules, setClassModules] = useState([])

    // Receive states from DepartmentList Component
    let location = useLocation();

    const qualificationDetails = location.state.id !== undefined ? {
            qualificationId: location.state.id,
            departmentId: location.state.departmentID,
            qualificationName: location.state.qualificationName,
            qualificationLevel: location.state.qualificationLevel,
            qualificationYear: location.state.qualificationYear,
        }
        : 
        {
            qualificationId:location.state.qualificationDetails.qualificationId,
            departmentId: location.state.qualificationDetails.departmentID,
            qualificationName: location.state.qualificationDetails.qualificationName,
            qualificationLevel:location.state.qualificationDetails.qualificationLevel,
            qualificationYear:location.state.qualificationDetails.qualificationYear,
    } 
    
    console.log(qualificationDetails.qualificationId)
    
    const moduleDetails = location.state.moduleDetails && {
        id: location.state.moduleDetails.id,
        classID: location.state.moduleDetails.classID,
        departmentId: location.state.moduleDetails.departmentId,
        moduleName: location.state.moduleDetails.moduleName,
    }

    // This Function is used to create a new ClassModule
    // then reload the page.
    const createNewModule = async () => {
        const moduleDetails = {
            moduleName: moduleNameInputValue,
            classID: qualificationDetails.qualificationId === '' ? '' 
                : qualificationDetails.qualificationId
        };
        const newModule = await API.graphql({ 
            query: mutations.createClassModule, 
            variables: {input: moduleDetails}
        });
        window.location.reload(false);
    }

    /* fetch the list of all ClassModule */
    useEffect( () => {
        const fetchModules = async () => {
            try {
                const classModuleResults = await API.graphql(
                    graphqlOperation(listClassModules)
                )
                const classModule = classModuleResults.data.listClassModules.items
                setClassModules(classModule)
            } 
            catch (error) {
                console.log(error)
                console.log('ClassID missing')
            }
        }
        fetchModules();
    }, [])

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
                    qualificationDetails={qualificationDetails}
                    moduleDetails={moduleDetails}/>

                <div className='add-new-module'>
                    <div 
                        className='active-department-list-title' 
                        onClick={ () => setShowCreateModule(true) }>
                        Add a new course <div className='access'>+</div>
                    </div> 
                </div>
                { classModules.map((moduleDetail) =>
                    moduleDetail.id && ( 
                        moduleDetail.classID === qualificationDetails.qualificationId ? 
                            <Link to={{     
                                pathname:'/Staff/Departments/Lessons',
                                state: {qualificationDetails, moduleDetail} }} 
                                key={moduleDetail.id}>
                                    <div 
                                        style={{marginTop: '1rem' }} 
                                        className='active-department-list-title'
                                        onClick={()=> setChosedModule(true)}>
                                        {moduleDetail.moduleName} <div className='access'>{`>`}</div>
                                    </div> 
                            </Link> : [])
                )}
                
                {/* The Pup-out window that allows the admin to create */}
                {/* a new module. */}
                {/* By default the display is set to false */}
                <div 
                    className='pop-out-window'
                    style={{ display:showCreateModule === false ? 'none' : '' }} >
                        <div className='create-course-pop-up-title'>
                            Create a new Course
                        </div>
                        <input
                            className='create-course-input'
                            placeholder='Course Name'
                            value={moduleNameInputValue}
                            onChange={e => setModuleNameInputValue(e.target.value)}
                        />
                        <input
                            className='create-course-input'
                            placeholder='Code'
                            value={moduleNameInputValue}
                            onChange={e => setModuleNameInputValue(e.target.value)}
                        />
                        <input
                            className='create-course-input'
                            placeholder='Credit'
                            value={moduleNameInputValue}
                            onChange={e => setModuleNameInputValue(e.target.value)}
                        />

                        <div style={{display: 'flex'}}>
                            <div className='create-course-input' id='select-a-teacher'>
                                Select a teacher <div className='dropdown-icon'/>
                            </div>
                            <div className='selected-teacher'>x Noleen Isaac</div>
                        </div>

                        <div style={{marginLeft:'7.5rem', marginTop:15}}>
                            <div 
                                style={{
                                    fontSize:20, 
                                    fontWeight:'bold',
                                    marginBottom: 15
                                    }}>Select a period
                            </div>
                            <div style={{display: 'block', width: '100%'}}>
                                <div style={{display:'flex', marginTop:15, marginBottom: 20}}>
                                    <input 
                                        type='checkbox'
                                        style={{marginTop: 5}} />
                                        <div style={{fontSize:16}}>All Year</div>
                                </div>
                                <div 
                                    className='create-course-input' 
                                    id='select-a-period'>
                                    Select a Semester <div className='dropdown-icon'/>
                                </div> 

                                <div 
                                    className='create-course-input' 
                                    id='select-a-period'>
                                    Monthly <div className='dropdown-icon'/>
                                </div>

                                <div className='create-course-input'>
                                </div>
                            </div>
                        </div>

                        <div style={{marginLeft:'7.5rem', marginTop:'-2rem', marginBottom:'2rem'}}>
                            <div 
                                style={{
                                    fontSize:20, 
                                    marginBottom: 15
                                    }}>Is the course compulsory ?
                                    <div style={{display:'flex', marginTop:15, marginBottom: 20}}>
                                        <input 
                                            type='checkbox'
                                            style={{marginTop: 5}} />
                                            <div style={{fontSize:16}}>Yes</div>
                                        <input 
                                            type='checkbox'
                                            style={{marginTop: 5, marginLeft: '20px'}} />
                                            <div style={{fontSize:16}}>No</div>
                                    </div>
                            </div>
                        </div>

                        <textarea
                            id='courseOverview'
                            className='create-course-input'
                            placeholder='Course Overview'
                            value={moduleNameInputValue}
                            onChange={e => setModuleNameInputValue(e.target.value)}
                        />
                        <div 
                            className='close-pop-up-icon' 
                            onClick={ () => setShowCreateModule(false)} />
                        <div 
                            onClick={ createNewModule } 
                            className='create-pop-up-button'
                        >Create</div>
                        <div style={{paddingBottom: '5rem'}}/>
                </div>

            </div>
        </div>
    );
}

export default ModulesList;