import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//import aws api and components to create new cart item
import { API, graphqlOperation } from "aws-amplify";
import { listFacultys } from '../../../../graphql/queries';

import './departmentsList.css' ;


function DepartmentsList({ setShowCreateDepartment, locationCampusDetails }) {

    const [toggleDown, setToggleDown1] = useState(false)

    const [ faculty, setFaculty ] = useState([])

     /* fetch the API data of faculties */
     useEffect( () => {
        const fetchFaculty = async () => {
            try {
                    const facultyResults = await API.graphql(
                        graphqlOperation(listFacultys)
                    )
                    const faculty = facultyResults.data.listFacultys.items
                    setFaculty(faculty)
                } 
            catch (error) {
                console.log(error)
            }
        }
        fetchFaculty();
    }, [])

    return (
        <div>
            <div onClick={() => setShowCreateDepartment(true)} className='exams-calendar-tilte'>
                + Add a new department
            </div>  

            {
            faculty.map((item, key=item.id) => 

            item.campusID === locationCampusDetails.locationCampusID ?
            
            <div className='this-container'>
                    { toggleDown === false ?
                        <div 
                        className='class-exams-calendar-tilte' style={{marginBottom:'25px'}} 
                        onClick={()=> setToggleDown1(true)}>
                            {item.facultyName} <div className='access'>↓</div>
                        </div> 
                        :
                        <>
                            <div className='active-class-exams-calendar-tilte' onClick={()=> setToggleDown1(false)}>
                                {item.facultyName} <div className='access'>↑</div>
                            </div> 
                            <div className='departments-list-container'>
                                <ul>
                                    <Link to='/Staff/Class'>
                                        <div style={{color: '#353839', cursor:'pointer'}}>+ Add a new course</div>
                                    </Link>
                                    <Link to='/Staff/Class'>
                                        <li>Financial accounting</li>
                                    </Link>
                                </ul>
                            </div> 
                        </>
                    }
                </div> : '')}
        </div>
    );
}

export default DepartmentsList;