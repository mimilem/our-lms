import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useDetectClickOutside } from 'react-detect-click-outside';

//import aws api and components to create new cart item
import { API, graphqlOperation } from "aws-amplify";
import { listClasss } from '../../../../graphql/queries';
import * as mutations from '../../../../graphql/mutations';

//import the styling compnent(s).
import './class.css';
import '../staffPages.css';

//import all assets.
import down from '../../../../assets/down.png'

//import all components that will be 
//displayed on the pages.
import ClassPageTopNavigation from './Components/ClassPageTopNavigation';
import HeaderAndSideNav from '../../Components/HeaderAndSideNav';


function ClassPage() {

    const [isShown, setIsShown] = useState(false);

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(true);
    const [activeTab, setActiveTab] = useState('department');

    const [stateClassYear, setStateClassYear] = useState(1)
    const [stateClass, setStateClass] = useState([])

    const [classYearInputValue, setClassYearInputValue] = useState()
    const [showCreateClass, setShowCreateClass] = useState(false)

    /* fetch the API data of classes in a department */
    useEffect( () => {
        const fetchClass = async () => {
            try {
                const classResults = await API.graphql(
                    graphqlOperation(listClasss)
                )
                const stateClass = classResults.data.listClasss.items
                setStateClass(stateClass)
            } 
            catch (error) {
                console.log(error)
            }
        }
        fetchClass();
    }, [])

    let location = useLocation();
    const departmentDetails = {
        departmentName: location.state.departmentName,
        departmentID: location.state.id
    }

    // This Function is used to create a new class
    // then reload the page.
    const createNewClass = async () => {
        const classDetails = {
            classYear: classYearInputValue,
            departmentID: departmentDetails.departmentID
        };
        const newClass = await API.graphql({ 
            query: mutations.createClass, 
            variables: {input: classDetails}
        });
        window.location.reload(false);
    }

    const closeDropdown = () => { setIsShown(false) }
    const ref = useDetectClickOutside({ onTriggered: closeDropdown });

    return (
        <div className="staff-pages-container">
            
            <HeaderAndSideNav
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab} />

            <div className='staff-pages-content'>
                <div 
                    className='staff-pages-header-dropdown'
                    onClick={() => setIsShown(true)} ref={ref} >

                    <div>
                        <div className='staff-pages-header-tilte'>
                            {departmentDetails.departmentName} - Year {stateClassYear}
                            <img 
                                src={down}
                                alt=''
                                className='down-icon'
                                title='Add a new class'/>
                        </div> 
                    </div>
                    {isShown && (
                        <ul className='staff-pages-header-dropdown-menu'>
                            <li
                                onClick={() => { setShowCreateClass(true) }}
                            >Add a class</li>
                            <hr className='nav-tab-hr'/>
                            { 
                            stateClass.map( classItem =>
                                classItem.departmentID === departmentDetails.departmentID ?
                                    <>
                                        <li onClick={() => setStateClassYear(classItem.classYear)}>
                                            Year {classItem.classYear}
                                        </li>
                                        <hr className='nav-tab-hr'/>
                                    </>
                                : []
                            )}
                        </ul> 
                    )}
                </div>
                
                <hr className='staff-page-hr'/>

                <ClassPageTopNavigation />

                {/* The Pup-out window that allows the admin to create */}
                {/* a new class. */}
                {/* By default the display is set to false */}
                <div 
                    className='pop-out-window'
                    style={{ display:showCreateClass === false ? 'none' : ''}} >
                        <div className='pop-up-title'>Create a new Class</div>
                        <input
                            className='lg-pop-up-input'
                            placeholder='Class Year'
                            value={classYearInputValue}
                            onChange={e => setClassYearInputValue(e.target.value)}
                        />
                        <div 
                            className='close-pop-up-icon' 
                            onClick={ () => setShowCreateClass(false)} />
                        <div 
                            onClick={ createNewClass } 
                            className='create-pop-up-button'
                        >Create</div>
                </div>

            </div>
        </div>
    );
}

export default ClassPage;