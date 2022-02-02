import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//import aws api and components to create new cart item
import { API, graphqlOperation } from "aws-amplify";
import { listStudents } from '../../../../../graphql/queries';
import * as mutations from '../../../../../graphql/mutations';

//import the styling compnent(s).
import './pendingStudentsList.css';


function PendingStudentsList() {

    const [students, setStudents] = useState([])
    const [studentId, setStudentId] = useState()
    const [studentFullname, setStudentFullname] = useState()
    const [studentSurname, setStudentSurname] = useState()
    const [studentPhoneNumber, setStudentPhoneNumber] = useState()
    const [studentEmail, setStudentEmail] = useState()
    const [studentCampusName, setStudentCampusName] = useState()
    const [studentDepartmentName, setStudentDepartmentName] = useState()
    const [studentYear, setStudentYear] = useState()
    const [studentPending, setStudentPending] = useState()
    const [studentClassID, setStudentClassID] = useState()

    const [showUpdateStudent, setShowUpdateStudent] = useState(false)
    const [showDeleteStudent, setShowDeleteStudent] = useState(false)

    // This Function is used to update the student information status
    // then reload the page.
    const updateStudent = async () => {
        const studentDetails = {
            id: studentId,
            pending: studentPending,
            classID: studentClassID,
            studentFullname: studentFullname,
            studentSurname: studentSurname,
            studentPhoneNumber: studentPhoneNumber,
            studentEmail: studentEmail,
            studentCampusName: studentCampusName,
            studentDepartmentName: studentDepartmentName,
            studentYear:studentYear,
        };
        const updatedStudent = await API.graphql({ 
            query: mutations.updateStudent, 
            variables: {input: studentDetails}
        });
        window.location.reload(false);
    }

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

    return (
        <div>
            <ol>
                <li className='pending-student-list-element' style={{marginBottom: '15px'}}>
                    <div className='pending-student-name'><b>No.</b></div>
                    <div className='pending-student-name'>Full Name + <b>Surname</b></div>
                    <div className='pending-student-action-title'><b>Actions</b></div>
                </li>
                {students.map((studentItemMap, index) => studentItemMap.pending === true ?
                    
                    <div to={{
                        pathname: '/Staff/Students/Profile=',
                        state: studentItemMap }}
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
                                <div 
                                    style={{color: 'green', marginRight: '10px'}} 
                                    title='Approve student'
                                    onClick={()=>{
                                        setStudentId(studentItemMap.id)
                                        setStudentPending(false)
                                        setStudentClassID(studentItemMap.classID);
                                        setStudentFullname(studentItemMap.studentFullname);
                                        setStudentSurname(studentItemMap.studentSurname);
                                        setStudentPhoneNumber(studentItemMap.studentPhoneNumber);
                                        setStudentEmail(studentItemMap.studentEmail);
                                        setStudentCampusName(studentItemMap.studentCampusName);
                                        setStudentDepartmentName(studentItemMap.studentDepartmentName);
                                        setStudentYear(studentItemMap.studentYear);
                                        setShowUpdateStudent(true);
                                    }}>Approve</div>
                                <div 
                                    style={{color: 'red'}} 
                                    title='Decline student'
                                    onClick={()=>{
                                        setStudentId(studentItemMap.id)
                                        setStudentPending(false)
                                        setShowDeleteStudent(true);
                                    }}>Decline</div>
                            </div>
                        </li>
                    </div> : [])
                }
            </ol>


            <div 
                className='pop-out-window'
                style={{ display:showUpdateStudent === false ? 'none' : ''}} >
                    <div className='pop-up-title'>Do you want to approve this student ?</div>
                        <div 
                            onClick={ updateStudent } 
                            className='create-pop-up-button'
                            style={{marginRight: '60px'}}
                        >Yes</div>
                        <div 
                            onClick={ () => setShowUpdateStudent(false) } 
                            className='create-pop-up-button'
                        >No</div>
            </div>
            

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
        </div>
    );
}

export default PendingStudentsList;