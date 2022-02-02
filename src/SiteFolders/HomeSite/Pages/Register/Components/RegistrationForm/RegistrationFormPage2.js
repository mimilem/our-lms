import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDetectClickOutside } from 'react-detect-click-outside';

import emailjs from '@emailjs/browser';

//import aws api and components to create new cart item
import { API, graphqlOperation } from "aws-amplify";
import { listCampuss, listFacultys, listDepartments, listClasss } from '../../../../../../graphql/queries';
import * as mutations from '../../../../../../graphql/mutations';

//import the styling compnent(s).
import './register-form.css';

//import all components that will be 
//displayed on the page.
import NavigationTab from '../../../../Components/NavigationTab';
import SubmissionMessage from '../SubmissionMessage/SubmissionMessage';


function RegistrationFormPage2() {
    
    //Set the document title of the page when it loads.
    useEffect(() => {
        document.title = "Apply | Vinco-elearning"
    }, []);

    //return button state
    const [back, setBack] = useState(true)
    //state to show the message that appears after submission
    const [showSubmissionMsg, setShowSubmissionMsg] = useState(false);

    const [showCampusDropdown, setShowCampusDropdown] = useState(false)
    const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false)
    const [showClassDropdown, setShowClassDropdown] = useState(false)
    
    const closeCampusDropdown = () => {
        setShowCampusDropdown(false);
    }
    const closeDepartmentDropdown = () => {
        setShowDepartmentDropdown(false);
    }
    const closeClassDropdown = () => {
        setShowClassDropdown(false);
    }
    const campusRef = useDetectClickOutside({ onTriggered: closeCampusDropdown });
    const ref = useDetectClickOutside({ onTriggered: closeDepartmentDropdown });
    const classRef = useDetectClickOutside({ onTriggered: closeClassDropdown });

    //list of courses of the select course dropdown
    const [selectedCampus, setSelectedCampus] = useState('');
    const [selectedCampusId, setSelectedCampusId] = useState('');

    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedDepartmentId, setSelectedDepartmentId] = useState('');
    const [selectedDepartmentName, setSelectedDepartmentName] = useState('');

    const [selectedClass, setSelectedClass] = useState();
    const [selectedClassId, setSelectedClassId] = useState('');
    const [selectedYear, setSelectedYear] = useState();
    
    //states to display fetched data for the registration form.
    const [campusData, setCampusData] = useState([])
    const [facultyData, setFacultyData] = useState([])
    const [departmentData, setDepartmentData] = useState([])
    const [classData, setClassData] = useState([])

    /* fetch the API data of campus, faculties, departements and classes */
    useEffect( () => {
        const fetchApiData = async () => {
            try {
                //fetch Campus list
                const campusResults = await API.graphql(
                    graphqlOperation(listCampuss)
                )
                const campus = campusResults.data.listCampuss.items
                setCampusData(campus)
                
                //fetch the list of faculties
                const facultyResults = await API.graphql(
                    graphqlOperation(listFacultys)
                )
                const faculty = facultyResults.data.listFacultys.items
                setFacultyData(faculty)
                
                //fetch the list of departments
                const departmentResults = await API.graphql(
                    graphqlOperation(listDepartments)
                )
                const department = departmentResults.data.listDepartments.items
                setDepartmentData(department)
                
                //fetch the list of classes
                const classResults = await API.graphql(
                    graphqlOperation(listClasss)
                )
                const classes = classResults.data.listClasss.items
                setClassData(classes)
            } 
            catch (error) {
                console.log(error)
            }
        }
        fetchApiData();
    }, [])

    let location = useLocation()
    let studentPageOneDetails = {
        studentYearOfStudy: location.state.yearOfStudy, 
        studentTitle: location.state.studentTitle, 
        studentFullName: location.state.studentFullName, 
        studentSurname: location.state.studentSurname, 
        studentPhoneNumber: location.state.studentPoneNumber, 
        studentEmail: location.state.studentEmail, 
        back: back 
    }

    // This Function is used to create a new student
    // then reload the page.
    const createNewStudent = async () => {
        const studentDetails = {
            studentFullname: studentPageOneDetails.studentFullName,
            studentSurname: studentPageOneDetails.studentSurname,
            studentPhoneNumber: studentPageOneDetails.studentPhoneNumber,
            studentEmail: studentPageOneDetails.studentEmail,
            studentCampusName: selectedCampus,
            studentDepartmentName: selectedClass,
            studentYear: selectedYear,
            pending: true,
            classID: selectedClassId,
        };
        const newStudent = await API.graphql({ 
            query: mutations.createStudent, 
            variables: {input: studentDetails}
        });
    }
    
    // Email JS Configuration starts
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_9ts60pl', 'template_e6p7onj', form.current, 'user_jARVxDXof45LgTfcZkUiu')
        .then((result) => {
            console.log(result.text);
            setShowSubmissionMsg(true)
        }, (error) => {
            console.log(error.text);
        });
    };
    let message = `Full name: ${studentPageOneDetails.studentFullName}`
    // Email JS Configuration ends

    return (
        <div className='register-page-container'>

            <NavigationTab />

            <div className='registration-form-background'>

                <form className='register-page-content' ref={form} onSubmit={sendEmail}>
                    <div className='registration-form-container'>
                        <div className='registration-form-title'>Application Form</div>
                        <hr className='registration-form-hr'/>

                        {/* Form Sub-Title */}
                        <div className='disabled-dark-horizontal-bar'>
                            <div className='registration-section-title'>Select a qualification</div>
                        </div>

                        {/* Learning Choice */}
                        <>
                            <div className='md-registration-form-title'>Type of learning</div>
                            <input 
                                className='registration-form-checkbox'
                                type='checkbox'
                            /> Online
                            <input 
                                className='registration-form-checkbox'
                                type='checkbox'
                            /> Part-Time
                            <input 
                                className='registration-form-checkbox'
                                type='checkbox'
                            /> Full Time
                        </>

                        {/* Campus dropdown */}
                        <div className='form-dropdown-container'>
                            <input
                                className='lg-registration-form-input'
                                placeholder="Choose a Campus"
                                value={selectedCampus} 
                                onChange={(e) => setSelectedCampus(e.target.value)}
                                onClick={() => setShowCampusDropdown(true)}
                                ref={campusRef} 
                                readonly="readonly"/>
                            { showCampusDropdown && (
                                <div className='select-dropdown'>
                                    {campusData.map((item) => 
                                        <div 
                                            className='select-dropdown-label'
                                            onClick={() => {
                                                setSelectedCampus(item.campusName)
                                                setSelectedCampusId(item.id)} }>
                                            {item.campusName}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        
                        <hr className='registration-form-hr'/>

                        {/* Department dropdown */}
                        <div className='form-dropdown-container'>
                            <div className='context-menu'>
                                <input 
                                    className='lg-registration-form-input'
                                    placeholder='Select a department'
                                    value={selectedDepartment}
                                    onChange={(e) => setSelectedDepartment(e.target.value)}
                                    onClick={() => setShowDepartmentDropdown(true)}
                                    ref={ref} 
                                    readonly="readonly"/>
                            </div>
                            { showDepartmentDropdown && (
                            <div className='select-dropdown'>
                                {facultyData.map((item) => 
                                    <div key={item.id}>
                                        <div className='select-dropdown-title'>
                                            {item.facultyName}
                                        </div>
                                        <hr className='select-dropdown-hr'/>
                                        
                                        {departmentData.map((items) =>
                                            item.id === items.facultyID ? 
                                            <div 
                                                className='select-dropdown-label'
                                                onClick={() => {
                                                    setSelectedDepartment(items.departmentName)
                                                    setSelectedDepartmentId(items.id)} }>
                                                {items.departmentName}
                                            </div>
                                            : []
                                        ) }
                                    </div>)}
                            </div>
                            )}
                        </div>

                        {/* Class Choice */}
                        <input
                            placeholder="Select a qualification"
                            value={`${selectedClass === undefined? 'Select a qualification' : selectedClass} 
                                ${selectedYear === undefined? '' : selectedYear }`} // set selected value
                            onChange={(e) => setSelectedClass(e.target.value)} // assign onChange function
                            onClick={() => setShowClassDropdown(true)}
                            ref={classRef}
                            readonly="readonly"
                            className='lg-registration-form-input'
                        />
                        { showClassDropdown && (
                            <div className='select-dropdown'>
                                {classData.map((item) => 
                                    item.departmentID === selectedDepartmentId ?
                                    <div 
                                        className='select-dropdown-label'
                                        onClick={() => {
                                            setSelectedClass(item.qualificationName)
                                            setSelectedYear(item.qualificationYear)
                                            setSelectedClassId(item.id)} }>
                                        {item.qualificationName} - {item.qualificationYear}
                                    </div>
                                    : []
                                )}
                            </div>
                        )}
                        <hr className='registration-form-hr'/>

                        <div className='disabled-dark-horizontal-bar'>
                            <div className='registration-section-title'>HOME ADDRESS</div>
                        </div>
                        <input 
                            placeholder='Home Address (Street Adress)'
                            className='lg-registration-form-input'
                            type='text'
                        />
                        <input 
                            placeholder='Suburb'
                            className='lg-registration-form-input'
                            type='text'
                        />

                        <input 
                            placeholder='City'
                            className='lg-registration-form-input'
                            type='text'
                        />

                        <input 
                            placeholder='Postal Code'
                            className='sm-registration-form-input'
                            type='number'
                        />

                        <hr className='registration-form-hr'/>

                        <div className='disabled-dark-horizontal-bar'>
                            <div className='registration-section-title'>CONTACT DETAILS</div>
                        </div>
                        <input 
                            placeholder='Student Surname'
                            value={studentPageOneDetails.studentSurname} 
                            name="user_name"
                            type='text'
                            className='lg-registration-form-input'
                        />
                        <input 
                            placeholder='Student Email'
                            value={studentPageOneDetails.studentEmail} 
                            name="user_email"
                            type='text'
                            className='lg-registration-form-input'
                        />

                        <textarea 
                            value={message}
                            name="message"
                            style={{display: 'none'}}/>

                        <div className='form-pagination'>2/2</div>
                        <button 
                            className='form-next-button' 
                            type="submit" 
                            value="Send"
                            onClick={createNewStudent}>Submit</button>

                        <Link to={{
                            pathname:'/Register',
                            state: studentPageOneDetails
                        }}>
                            <button className='form-back-button'>Back</button>
                        </Link>
                    </div>
                    
                    <div style={{display: showSubmissionMsg === false ? 'none' : 'block'}}>
                        <SubmissionMessage />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegistrationFormPage2;