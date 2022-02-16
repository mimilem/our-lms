import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import { useDetectClickOutside } from 'react-detect-click-outside';

//import aws api and components to create new cart item
import { API, graphqlOperation } from "aws-amplify";
import { listStudents, listClasss } from '../../../../../graphql/queries';
import * as mutations from '../../../../../graphql/mutations';

//import the styling compnent(s).
import './allStudentsList.css';


function AllStudentsList({ studentFilterData }) {

    const studentName='Nephthali-Salam'

    let viewAll = undefined

    const [students, setStudents] = useState([])
    const [studentId, setStudentId] = useState()
    
    const [qualificationData, setQualificationData] = useState([])
    const [selectedQualification, setSelectedQualification] = useState(undefined)
    const [showQualificationDropdown, setShowQualificationDropdown] = useState(false)
    const [selectedQualificationId, setSelectedQualificationId] = useState()
    const [selectedQualificationYear, setSelectedQualificationYear] = useState()

    const [showDeleteStudent, setShowDeleteStudent] = useState(false)
    
    const closeQualificationDropdown = () => {
        setShowQualificationDropdown(false);
    }
    const qualificationRef = useDetectClickOutside({ onTriggered: closeQualificationDropdown });

    /* fetch the API data of students */
    useEffect( () => {
        const fetchStudents = async () => {
            try {
                //Qualification
                const qualificationResults = await API.graphql(
                    graphqlOperation(listClasss)
                )
                const qualification = qualificationResults.data.listClasss.items
                setQualificationData(qualification)

                //Students
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

    // This Function is used to delete the student information
    // then reload the page.
    const deleteStudent = async () => {
        const studentDetails = {
            id: studentId
        };
        const deleteStudent = await API.graphql({ 
            query: mutations.deleteStudent, 
            variables: {input: studentDetails}
        });
        window.location.reload(false);
    }
    
    return (
        <>
            <div className='filter-container'>
                <div>Filter By</div>

                {/* By Qualification */}
                <div className='filter-input-container'>
                    <input 
                        className='filter-input'
                        placeholder='Qualification'
                        title={selectedQualification !== viewAll ? 
                            `Filter by: ${selectedQualification} ${selectedQualificationYear}` : 'Filter by'}
                        readOnly='readonly'
                        ref={qualificationRef}
                        value={selectedQualification} 
                        onChange={(e) => setSelectedQualification(e.target.value)}
                        onClick={() => setShowQualificationDropdown(true)}/>
                        {showQualificationDropdown === true ? (
                            <div className='filter-input-dropdown'>
                                <div 
                                    className='input-dropdown-label'
                                    onClick={()=>  {
                                        setSelectedQualification(viewAll)
                                        setSelectedQualificationId(viewAll)
                                        setSelectedQualificationYear(viewAll)
                                    } }>View All</div>
                                {   qualificationData.map((qualificationDataMap) =>
                                    <div 
                                        key={qualificationDataMap.id}
                                        className='input-dropdown-label'
                                        onClick={()=> {
                                            setSelectedQualification(qualificationDataMap.qualificationName)
                                            setSelectedQualificationId(qualificationDataMap.id)
                                            setSelectedQualificationYear(qualificationDataMap.qualificationYear) }}>
                                        {qualificationDataMap.qualificationName} - {qualificationDataMap.qualificationYear}
                                    </div>)
                                }
                            </div>
                        ): []}
                </div>
            </div>
            
            <ol>
                <li className='pending-student-list-element' style={{marginBottom: '15px', fontSize: '16px'}}>
                    <div className='pending-student-name'><b>No.</b></div>
                    <div className='pending-student-name' style={{marginRight: '80px'}}>Full Name + <b>Surname</b></div>
                    <div className='pending-student-action-title'><b>Actions</b></div>
                </li>
                {
                studentFilterData.map((studentItemMap, index) => 
                    (studentItemMap.pending === false &&
                        selectedQualification === studentItemMap.studentDepartmentName &&
                        selectedQualificationYear == studentItemMap.studentYear) ? 
                    <div 
                        key={studentItemMap.id}
                        title='View Profile'
                        style={{textDecoration:'none'}}>
                            
                        <li className='pending-student-list-element'>
                            <div className='pending-student-name'>
                                { index + 1 }. 
                            </div>
                            <div
                                className='pending-student-name'>{ studentItemMap.studentFullname } <b>{ 
                                studentItemMap.studentSurname }</b>
                            </div>

                            <div className="pending-student-action">
                                <Link to={{
                                        pathname: '/Staff/Students/Profile=',
                                        state: studentItemMap }} 
                                    style={{color: '#000', marginRight: '20px'}} title='View Profile'
                                    onClick={()=>{
                                        setStudentId(studentItemMap.id)
                                        setShowDeleteStudent(true);
                                    }}>View Profile</Link>
                                <div style={{color: 'red', marginRight: '20px'}} title='Delete student'
                                    onClick={()=>{
                                        setStudentId(studentItemMap.id)
                                        setShowDeleteStudent(true);
                                    }}>Delete</div>
                            </div>
                        </li>
                    </div>  
                    : 
                    (studentItemMap.pending === false &&
                        selectedQualification === undefined) ?
                    <div 
                        title='View Profile'
                        style={{textDecoration:'none'}}>
                            
                        <li className='pending-student-list-element'>
                            <div className='pending-student-name'>
                                { index + 1 }. 
                            </div>
                            <div className='pending-student-name'>{ studentItemMap.studentFullname } <b>{ 
                                studentItemMap.studentSurname }</b>
                            </div>

                            <div className="pending-student-action">
                                <Link to={{
                                        pathname: '/Staff/Students/Profile=',
                                        state: studentItemMap }} 
                                    style={{color: '#000', marginRight: '20px'}} title='View Profile'
                                    onClick={()=>{
                                        setStudentId(studentItemMap.id)
                                        setShowDeleteStudent(true);
                                    }}>View Profile</Link>
                                <div style={{color: 'red', marginRight: '20px'}} title='Delete student'
                                    onClick={()=>{
                                        setStudentId(studentItemMap.id)
                                        setShowDeleteStudent(true);
                                    }}>Delete</div>
                            </div>
                        </li>
                    </div> : [])
                }
            </ol>

            <div 
                className='pop-out-window'
                style={{ display:showDeleteStudent === false ? 'none' : ''}} >
                    <div className='pop-up-title'>Do you want to delete this student ?</div>
                        <div 
                            onClick={ deleteStudent } 
                            className='create-pop-up-button'
                            style={{marginRight: '60px'}}
                        >Yes</div>
                        <div 
                            onClick={ () => setShowDeleteStudent(false) } 
                            className='create-pop-up-button'
                        >No</div>
            </div>
        </>
    );
}

export default AllStudentsList;