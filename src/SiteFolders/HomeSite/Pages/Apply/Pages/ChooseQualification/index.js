import React, { useState, useEffect } from 'react';

import { Link, Redirect } from 'react-router-dom';

//Handles the click outside event of a dropdown.
import { useDetectClickOutside } from 'react-detect-click-outside';

import { API, Auth, graphqlOperation } from "aws-amplify";
import { listCampuss, listFacultys, listDepartments, listClasss } from '../../../../../../graphql/queries';
import * as mutations from '../../../../../../graphql/mutations';

import './chooseQualification.css';


function ChooseQualification() {

    const [studentChooseQlForm1, setStudentChooseQlForm1] = useState(true) 
    const [studentChooseQlForm2, setStudentChooseQlForm2] = useState(false) 
    const [studentChooseQlForm3, setStudentChooseQlForm3] = useState(false) 

    const [error, setError] = useState(null);
    const [currentUsername, setCurrentUsername] = useState('');
    const [currentName, setCurrentName] = useState('');
    const [currentFamilyName, setCurrentFamilyName] = useState('');
    const [currentPhoneNumber, setCurrentPhoneNumber] = useState('');
    const [currentEmail, setCurrentEmail] = useState('');

    const [userTitle, setUserTitle] = useState('');

    // States to show the dropdowns
    const [showCampusDropdown, setShowCampusDropdown] = useState(false)
    const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false)
    const [showClassDropdown, setShowClassDropdown] = useState(false)
    
    // Close form fields dropdown on outside click.
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
    const departmentRef = useDetectClickOutside({ onTriggered: closeDepartmentDropdown });
    const classRef = useDetectClickOutside({ onTriggered: closeClassDropdown });

    //
    const [selectedCampus, setSelectedCampus] = useState('');
    const [selectedCampusId, setSelectedCampusId] = useState('');

    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedDepartmentId, setSelectedDepartmentId] = useState('');

    const [selectedFaculty, setSelectedFaculty] = useState('');
    const [selectedFacultyId, setSelectedFacultyId] = useState('');

    const [selectedClass, setSelectedClass] = useState();
    const [selectedClassId, setSelectedClassId] = useState('');
    const [selectedYear, setSelectedYear] = useState();

    const [formState, setFormState] = useState('');

    useEffect(() => {
        
        //automatically scroll to top
        window.scrollTo(0,0);

        try {
          setError(null);
    
          Auth.currentAuthenticatedUser({
            bypassCache: false  
          }).then(user => {
            setCurrentUsername(user.username);
            setCurrentName(user.attributes.name);
            setCurrentFamilyName(user.attributes.family_name);
            setCurrentPhoneNumber(user.attributes.phone_number);
            setCurrentEmail(user.attributes.email);
            // TBD
          }).catch(err => setError(err));
        }
        catch (e) {
          setError(e);
        }
    }, []);

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

    // This Function is used to create a new campus
    // then reload the page.
    const createStudentInformation = async () => {
        const studentDetails = {
            studentFullname: currentUsername,
            studentSurname: currentFamilyName,
            studentPhoneNumber: currentPhoneNumber,
            studentEmail: currentEmail,
            studentNumber: currentUsername,
            pending: true,

            studentCampusName: selectedCampus,
            studentCampusID: selectedCampusId,

            studentFacultyName: selectedFaculty,
            studentFacultyID: selectedFacultyId,

            studentDepartmentName: selectedDepartment,
            studentDepartmentID: selectedDepartmentId,

            studentQualificationName: selectedClass,
            studentQualificationID: selectedClassId,

            classID: selectedClassId,
        };
        const newStudent = await API.graphql({ 
            query: mutations.createStudent, 
            variables: {input: studentDetails}
        });
        setFormState('signIn')
    }

    
    if (formState==='signIn') {
        return <Redirect to='/Students/Dashboard' />
    }

    return (
        <div className='student-loginPage-container'>
            
            <div className='student-loginPage-backgroundImage' />

            <div className='student-login-card-container'>
                <div className='applyPage-card'>

                    <div className='applyPage-card-title'>
                        Step Two: Choose Qualification
                    </div>
                    {studentChooseQlForm1 && (
                        <>
                            <div className='student-login-form'>
                                <input
                                    placeholder='Title'
                                    onChange={e => setUserTitle(e.target.value)}
                                    type='text' />
                                <input
                                    placeholder='Name'
                                    value={currentName}
                                    type='text' disabled={true} />
                                <input
                                    placeholder='Family name'
                                    value={currentFamilyName}
                                    type='text' disabled={true} />
                                <input
                                    placeholder='Phone number'
                                    value={currentPhoneNumber}
                                    type='text' disabled={true} />
                                <input
                                    placeholder='Email Adress'
                                    value={currentEmail}
                                    type='text' disabled={true} />
                            </div>

                            <div className='ChooseQualification-pagination'>
                                1/3
                            </div>
                            <Link >
                                <button 
                                    onClick={() => {
                                        setStudentChooseQlForm1(prevState => !prevState)
                                        setStudentChooseQlForm2(prevState => !prevState)
                                    }}
                                    className='student-login-login-button'>
                                    Next
                                </button>
                            </Link>

                        </>
                    )}
                    {studentChooseQlForm2 && (
                        <>
                            <div className='student-login-form'>
                                <input
                                    placeholder='Home Adress'
                                    type='text' />
                                <input
                                    placeholder='City/Town'
                                    type='text' />
                                <input
                                    placeholder='Country'
                                    type='text' />
                            </div>

                            <div className='ChooseQualification-pagination'>
                                2/3
                            </div>
                            <Link >
                                <button 
                                    onClick={() => {
                                        setStudentChooseQlForm2(prevState => !prevState)
                                        setStudentChooseQlForm3(prevState => !prevState)
                                    }}
                                    className='student-login-login-button'>
                                    Next
                                </button>
                            </Link>
                        </>
                    )}
                    {studentChooseQlForm3 && (
                        <>
                            <div className='student-login-form'>

                                <div className='form-dropdown-container'>
                                    <input
                                        placeholder='Choose a campus'
                                        style={{cursor: 'pointer'}}
                                        type='text'
                                        value={selectedCampus} 
                                        onChange={(e) => setSelectedCampus(e.target.value)}
                                        onClick={() => setShowCampusDropdown(true)}
                                        ref={campusRef} 
                                        readonly="readonly" />
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

                                <div>
                                    <input
                                        placeholder='Choose a department'
                                        style={{cursor: 'pointer'}}
                                        type='text'
                                        value={selectedDepartment} 
                                        onChange={(e) => setSelectedDepartment(e.target.value)}
                                        onClick={() => setShowDepartmentDropdown(true)}
                                        ref={departmentRef} 
                                        readonly="readonly" />
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
                                                                    setSelectedDepartmentId(items.id)
                                                                    setSelectedFaculty(item.facultyName)
                                                                    setSelectedFacultyId(item.id)
                                                                } 
                                                                }>
                                                                {items.departmentName}
                                                            </div> 
                                                            : []
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                </div>

                                <div>
                                    <input
                                        placeholder='Choose a qualification'
                                        style={{cursor: 'pointer'}}
                                        type='text'
                                        value={`${selectedClass === undefined? 'Select a qualification' : selectedClass} 
                                                ${selectedYear === undefined? '' : selectedYear }`}
                                        onChange={(e) => setSelectedClass(e.target.value)}
                                        onClick={() => setShowClassDropdown(true)}
                                        ref={classRef}
                                        readonly="readonly" />

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
                                </div>
                            </div> 

                            <div className='ChooseQualification-pagination'>
                                3/3
                            </div>
                            <Link >
                                <button 
                                    onClick={createStudentInformation}
                                    className='student-login-login-button'>
                                    Submit
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>

        </div>
    );
}

export default ChooseQualification;