import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//import aws api and components to create new cart item
import { API, graphqlOperation } from "aws-amplify";
import { listFacultys, listDepartments, listClasss } from '../../../../graphql/queries';

//import the styling compnent(s).
import './departmentsList.css' ;


function DepartmentsList({ 
    setShowCreateFaculty, 
    setShowCreateDepartment,
    setShowCreateQualification,
    setStateFacultyID,
    setStateDepartmentID,
    locationCampusDetails 
}) {
    
    const [toggleDown, setToggleDown1] = useState(false)

    const [faculty, setFaculty] = useState([])
    const [department, setDepartment] = useState([])
    const [qualification, setQualification] = useState([])

     /* fetch the API data of faculties and departements */
     useEffect( () => {
        const fetchFaculty = async () => {
            try {
                //faculties
                const facultyResults = await API.graphql(
                    graphqlOperation(listFacultys)
                )
                const faculty = facultyResults.data.listFacultys.items
                setFaculty(faculty)

                //departements
                const departmentResults = await API.graphql(
                    graphqlOperation(listDepartments)
                )
                const department = departmentResults.data.listDepartments.items
                setDepartment(department)

                //qualification
                const qualificationResults = await API.graphql(
                    graphqlOperation(listClasss)
                )
                const qualification = qualificationResults.data.listClasss.items
                setQualification(qualification)
            } 
            catch (error) {
                console.log(error)
            }
        }
        fetchFaculty();
    }, [])

    return (
        <div>
            {/* onClick show the window to create a new faculty (window section placed 
            in the Departments component) */}
            <div onClick={() => setShowCreateFaculty(true)} className='exams-calendar-tilte'>
                + Add a new faculty
            </div>  

            {/* 1. Check the campus IDs to display the corresponding faculties */}
            {faculty.map((facultyItemMap) => facultyItemMap.campusID === locationCampusDetails.locationCampusID ?
            
            <div key={facultyItemMap.id} className='this-container'>

                {/* Display full information if the toggle state is set to true. */}
                { toggleDown === false ?
                    <div 
                        className='class-exams-calendar-tilte' 
                        style={{marginBottom:'25px'}} 
                        onClick={()=> setToggleDown1(true)}>
                            {facultyItemMap.facultyName} <div className='access'>↓</div>
                    </div> 
                    :
                    <>
                        <div 
                            className='active-class-exams-calendar-tilte' 
                            onClick={()=> setToggleDown1(false)}>
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
                                    style={{color: '#353839', cursor:'pointer', textTransform:'capitalize'}}
                                    onClick={() => {
                                        setShowCreateDepartment(true)
                                        setStateFacultyID(facultyItemMap.id)}}>
                                            + Add a new department
                                </div>
                                { 
                                // If the faculty id is the same as the department 
                                // facultyID field display the list of departments.
                                // Else it does not belong so don't display.

                                department.map((departmentItemMap) => departmentItemMap.facultyID === facultyItemMap.id ?

                                <div key={departmentItemMap.id}>

                                    <li style={{textTransform:'capitalize'}}>{departmentItemMap.departmentName}</li>

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
                                                    state: qualificationItemMap }}>
                                                    <div className='qualification-list'>
                                                        {qualificationItemMap.qualificationName} - {
                                                        qualificationItemMap.qualificationYear} Year
                                                    </div>
                                                </Link>
                                            </div> :[])
                                        }    
                                    </div>
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