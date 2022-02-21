import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//import the styling compnent(s).
import './departmentsList.css' ;


function DepartmentsList({ 
    setShowCreateFaculty, 
    setShowCreateDepartment,
    setShowCreateQualification,
    setStateFacultyID,
    setStateDepartmentID,
    locationCampusDetails,
    faculty,
    setFaculty,
    department,
    setDepartment,
    qualification,
    setQualification,
    campusId
}) {

    const [toggleDown, setToggleDown] = useState();

    return (
        <div>
            {/* onClick show the window to create a new faculty (window section placed 
            in the Departments component) */}
            <div 
                onClick={() => setShowCreateFaculty(true)} 
                className='exams-calendar-tilte'
                style={{fontSize: 17, alignItems:'center'}}>
                + Add a new faculty
            </div>  

            {/* 1. Check the campus IDs to display the corresponding faculties */}
            {faculty.map((facultyItemMap) => facultyItemMap.campusID === locationCampusDetails.locationCampusID ?
            
            <div key={facultyItemMap.id} className='this-container'>

                {/* Display full information if the toggle state is set to true. */}
                { toggleDown !== facultyItemMap.id ?
                    <div 
                        className='department-list-title' 
                        style={{marginBottom:'25px'}} 
                        onClick={()=> setToggleDown(facultyItemMap.id)}>
                            {facultyItemMap.facultyName} <div className='access'>↓</div>
                    </div> 
                    :
                    <>
                        <div 
                            className='active-department-list-title' 
                            onClick={()=> setToggleDown('')}>
                                {facultyItemMap.facultyName} <div className='access'>↑</div>
                        </div> 
                        {/* Display the departments belonging to the corresponding faculty. */}
                        <div className='departments-list-container'>
                            <ul>
                                {/* onClick show the window to create a new department (window section placed 
                                    in the Departments component) */}
                                
                                {/* Store the faculty id(in setStateFacultyID declared in the Departments component)
                                    so that we may assign this id when we create a new department. */}
                                <div 
                                    style={{
                                        color: '#353839', 
                                        cursor:'pointer', 
                                        textTransform:'capitalize', 
                                        fontSize: 16, 
                                        marginLeft: '69%'}}
                                    onClick={() => {
                                        setShowCreateDepartment(true)
                                        setStateFacultyID(facultyItemMap.id)}}>
                                            + Add a new department
                                </div>
                                <hr className='department-list-hr' />
                                { 
                                // If the faculty id is the same as the department 
                                // facultyID field display the list of departments.
                                // Else it does not belong so don't display.

                                department.map((departmentItemMap) => departmentItemMap.facultyID === facultyItemMap.id ?

                                <div key={departmentItemMap.id}>

                                    <li style={{textTransform:'capitalize', fontSize: 16}}>
                                        Department: {departmentItemMap.departmentName}
                                    </li>

                                    <div className='qualification-container'>
                                        <div className='add-qualification'
                                            onClick={() => {
                                                setShowCreateQualification(true)
                                                setStateDepartmentID(departmentItemMap.id)}}>
                                            + Add a new qualification
                                        </div>
                                        {
                                        //  Sort in ascending order and map throught the list of qualification
                                        //  Send the qualificationItemMap to the ModuleList component. 
                                        qualification.sort((a, b) => a.qualificationYear - b.qualificationYear)
                                        .map((qualificationItemMap) =>
                                            qualificationItemMap.departmentID === departmentItemMap.id ?
                                            <div key={qualificationItemMap.id}>
                                                <Link to={{
                                                    pathname:'/Staff/Departments/ModulesList',
                                                    state:{ qualificationItemMap, campusId }}}>
                                                    <div className='qualification-list'>
                                                        {qualificationItemMap.qualificationName} - {
                                                        qualificationItemMap.qualificationYear} Year
                                                    </div>
                                                </Link>
                                            </div> :[])
                                        }    
                                    </div>
                                    
                                    <hr className='department-list-hr' />
                                    </div>
                                    : ''
                                )}
                            </ul>
                        </div> 
                    </>
                }
            </div> : '')}
        </div>
    );
}

export default DepartmentsList;