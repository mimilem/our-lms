import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

//import aws api and components to create new cart item
import { API, graphqlOperation } from "aws-amplify";
import { listStudents } from '../../../../../../graphql/queries';

import './classStudents.css';
import '../classComponent.css';

import ClassHeader from '../ClassHeader';
import HeaderAndSideNav from '../../../../Components/HeaderAndSideNav';


function ClassStudents() {

    
    const [tabContent, setTabContent] = useState('students');
    const [chosedModule, setChosedModule] = useState(true);
    
    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(true);
    const [activeTab, setActiveTab] = useState('department');

    const [students, setStudents] = useState([])

    /* fetch the API data of students */
    useEffect( () => {
        const fetchStudents = async () => {
            try {
                const studentResults = await API.graphql(
                    graphqlOperation(listStudents)
                )
                const student = studentResults.data.listStudents.items
                setStudents(student)
            } 
            catch (error) {
                console.log(error)
            }
        }
        fetchStudents();
    }, [])
    
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
                    
                    <div className='second-title'>
                        Students taking this module
                    </div>
                        <ol>
                            <li className='student-list-element' style={{marginBottom: '15px'}}>
                                <div className='student-name'><b>No.</b></div>
                                <div className='student-name'><b>Full Name</b></div>
                                <div className='student-number'><b>Student Number</b></div>
                            </li>
                                { students.sort((a, b) => a.studentFullname - b.studentFullname)
                                .map((studentItemMap, index) =>
                                   <li className='student-list-element'>
                                        <div className='student-name'>{index + 1}.</div>
                                        <div className='student-name'>{studentItemMap.studentFullname} {
                                            studentItemMap.studentSurname}</div>
                                        <div className='student-number'>5135468541</div>
                                    </li>
                                    /* remove button 
                                    <div className='remove-from-list'>Remove</div>  */
                                )}
                        </ol>
                </div>
            </div>

        </div>
    );
}

export default ClassStudents;