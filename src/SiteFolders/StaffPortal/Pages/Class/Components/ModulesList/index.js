import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './module-list.css';

import ClassHeader from '../ClassHeader';
import HeaderAndSideNav from '../../../../Components/HeaderAndSideNav';

// Import the amplify API and components to handle the 
// requests.
import { API, graphqlOperation } from "aws-amplify";
import { listClassModules } from '../../../../../../graphql/queries';
import * as mutations from '../../../../../../graphql/mutations';


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

    const [classModules, setClassModules] = useState([])

    let location = useLocation();

    const departmentDetails = {
        departmentName: location.state.departmentName,
        departmentID: location.state.id
    }

    /* fetch the API data of ClassModule*/
    useEffect( () => {
        const fetchModules = async () => {
            try {
                const departmentResults = await API.graphql(
                    graphqlOperation(listClassModules)
                )
                const department = departmentResults.data.listClassModules.items
                setClassModules(department)
            } 
            catch (error) {
                console.log(error)
            }
        }
        fetchModules();
    }, [])

    // This Function is used to create a new module
    // then reload the page.
    const createNewModule = async () => {
        const moduleDetails = {
            moduleName: moduleNameInputValue
        };
        const newModule = await API.graphql({ 
            query: mutations.createClassModule, 
            variables: {input: moduleDetails}
        });
        window.location.reload(false);
    }

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
                    location={location} />

                <div className='add-new-module'>
                    <div 
                        className='active-class-exams-calendar-tilte' 
                        onClick={ () => setShowCreateModule(true) }>
                        Add a new module <div className='access'>+</div>
                    </div> 
                </div>
                { classModules.map((moduleDetails) => 
                    moduleDetails.id === undefined || moduleDetails.id === '' ? ''
                    : 
                    <Link to={{     
                        pathname:'/Staff/Departments/Lessons',
                        state: {departmentDetails, moduleDetails}
                    }} >
                        <div 
                            style={{marginTop: '1rem' }} 
                            className='active-class-exams-calendar-tilte'
                            onClick={()=> setChosedModule(true)}>
                            {moduleDetails.moduleName} <div className='access'>{`>`}</div>
                        </div> 
                    </Link> )
                }
                {/* The Pup-out window that allows the admin to create */}
                {/* a new module. */}
                {/* By default the display is set to false */}
                <div 
                    className='pop-out-window'
                    style={{ display:showCreateModule === false ? 'none' : ''}} >
                        <div className='pop-up-title'>Create a new module</div>
                        <input
                            className='lg-pop-up-input'
                            placeholder='Faculty Name'
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
                </div>

            </div>
        </div>
    );
}

export default ModulesList;