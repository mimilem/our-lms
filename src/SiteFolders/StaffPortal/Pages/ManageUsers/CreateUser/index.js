import React, { useEffect, useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';

import { Auth, API, graphqlOperation } from 'aws-amplify';
import { 
    listTeachers, 
    listCampuss,
    listDepartments, 
    listClassModules
} from '../../../../../graphql/queries';
import * as mutations from '../../../../../graphql/mutations';

import './createUser.css';


function CreateUser({ showCreateUser, setShowCreateUser}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [adminName, setAdminName] = useState('')
    const [adminFamilyName, setAdminFamilyName] = useState('')
    const [adminPhoneNumber, setAdminPhoneNumber] = useState('')

    const [roleInput, setRoleInput] = useState('')

    const [teacherFullNameInputValue, setTeacherFullNameInputValue] = useState('')
    const [teacherSurnameInput, setTeacherSurnameInput] = useState('')
    const [teacherGenderInput, setTeacherGenderInput] = useState('')
    const [teacherCampusNameInput, setTeacherCampusNameInput] = useState('')
    const [teacherDepartmentNameInput, setTeacherDepartmentNameInput] = useState('')
    const [teacherQualificationNameInput, setTeacherQualificationNameInput] = useState('')
    const [teacherCourseNameInput, setTeacherCourseNameInput] = useState('')

    const [showRoleDropdown, setShowRoleDropdown] = useState(false)
    const [showCampusDropdown, setShowCampusDropdown] = useState(false)
    const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false)
    const [showClassModuleDropdown, setShowClassModuleDropdown] = useState(false)

    const [selectedCampus, setSelectedCampus] = useState(false)
    const [selectedDepartment, setSelectedDepartment] = useState(false)
    const [selectedCourse, setSelectedCourse] = useState(false)

    const [campus, setCampus] = useState([])
    const [department, setDepartment] = useState([])
    const [classModule, setClassModule] = useState([])

    const closeRoleDropdown = () => {
        setShowRoleDropdown(false);
    }
    const refRole = useDetectClickOutside({ onTriggered: closeRoleDropdown });

    const closeCampus = () => {
        setShowCampusDropdown(false);
    }
    const refCampus = useDetectClickOutside({ onTriggered: closeCampus });
   
    const closeDepartment = () => {
        setShowDepartmentDropdown(false);
    }
    const refDepartment = useDetectClickOutside({ onTriggered: closeDepartment });
   
    const closeClassModule = () => {
        setShowClassModuleDropdown(false);
    }
    const refClassModule = useDetectClickOutside({ onTriggered: closeClassModule });

    async function signUp() {
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email,
                    name: adminName,
                    family_name: adminFamilyName,
                    phone_number: adminPhoneNumber,
                }
            });
            window.location.reload(false);
        } catch (error) {
            console.log('error signing up:', error);
        }
    }

    async function signUpTeacher() {
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email
                }
            });
            const teacherDetails = {
                username: username,
                email: email,
                teacherFullName: teacherFullNameInputValue,
                teacherSurname: teacherSurnameInput,
                teacherGender: teacherGenderInput,
                teacherCampusName: teacherCampusNameInput,
                teacherDepartmentName: teacherDepartmentNameInput,
                teacherQualificationName: teacherQualificationNameInput,
                teacherCourseName: teacherCourseNameInput,
                role: roleInput,
            };
            /*const newTeacher = await API.graphql({ 
                query: mutations.createTeacher, 
                variables: {input: teacherDetails}
            });*/
            window.location.reload(false);
        } catch (error) {
            console.log('error signing up:', error);
        }
    }

    /* fetch the list of all ClassModule */
    useEffect( () => {

        window.scrollTo(0,0);

        const fetchModules = async () => {
            try {

                //campus
                const campusResults = await API.graphql(
                    graphqlOperation(listCampuss)
                )
                const campus = campusResults.data.listCampuss.items
                setCampus(campus)

                //departments
                const departmentResults = await API.graphql(
                    graphqlOperation(listDepartments)
                )
                const department = departmentResults.data.listDepartments.items
                setDepartment(department)

                //classModules
                const classModulesResults = await API.graphql(
                    graphqlOperation(listClassModules)
                )
                const classModule = classModulesResults.data.listClassModules.items
                setClassModule(classModule)
            } 
            catch (error) {
                console.log('error fetching the teacher list', error)
            }
        }
        fetchModules();
    }, [])

    return (
        <div 
            style={{ display:showCreateUser === false ? 'none' : ''}}
            className='pop-out-window'>
                <div className='create-course-pop-up-title'>
                    Create a new User
                </div>

                <div className='createUser-profile-picture'/>

                <input
                    className='create-course-input'
                    placeholder='Full name'
                    value={adminName}
                    onChange={(e) => setAdminName(e.target.value)}
                />
                <input
                    className='create-course-input'
                    placeholder='Surname'
                    value={adminFamilyName}
                    onChange={(e) => setAdminFamilyName(e.target.value)}
                />
                <input
                    className='create-course-input'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className='create-course-input'
                    placeholder='Phone number'
                    value={adminPhoneNumber}
                    onChange={(e) => setAdminPhoneNumber(e.target.value)}
                />
                <input
                    className='create-course-input'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className='create-course-input'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <div style={{display: 'flex'}}>
                    <div className='create-course-input' id='select-a-teacher'>
                        Role <div className='dropdown-icon'/>
                    </div>
                    <div className='selected-teacher'>Teacher</div>
                </div>

                <div style={{display: 'flex'}}>
                    <div 
                        className='create-course-input' 
                        id='select-a-teacher'
                        onClick={() => setShowCampusDropdown(true)}
                        ref={refCampus}>
                        Campus <div className='dropdown-icon'/>
                    </div>
                    {
                        selectedCampus === true ?
                            <div className='selected-teacher'>x {teacherCampusNameInput}</div>
                        : []
                    }
                </div>
                { showCampusDropdown && (
                    <div className='select-teacher-dropdown'>
                        {
                            campus.map((campus) => (
                                <>    
                                    <div 
                                        className='select-course-dropdown-label'
                                        onClick={ () => {
                                            setTeacherCampusNameInput(campus.campusName);
                                            setSelectedCampus(true)
                                        }}>
                                        {campus.campusName}
                                    </div>
                                    <hr className='select-form-hr'/>
                                </>
                            ))
                        }
                    </div>)}

                <div style={{display: 'flex'}}>
                    <div 
                        className='create-course-input' 
                        id='select-a-teacher'
                        onClick={() => setShowDepartmentDropdown(true)}
                        ref={refDepartment}>
                        Department <div className='dropdown-icon'/>
                    </div>
                    {
                        selectedDepartment === true ?
                            <div className='selected-teacher'>x {teacherDepartmentNameInput}</div>
                        : []
                    }
                </div>
                { showDepartmentDropdown && (
                    <div className='select-teacher-dropdown'>
                        {
                            department.map((department) => (
                                <>    
                                    <div 
                                        className='select-course-dropdown-label'
                                        onClick={ () => {
                                            setTeacherDepartmentNameInput(department.departmentName);
                                            setSelectedDepartment(true)
                                        }}>
                                        {department.departmentName}
                                    </div>
                                    <hr className='select-form-hr'/>
                                </>
                            ))
                        }
                    </div>)}

                <div style={{display: 'flex'}}>
                    <div 
                        className='create-course-input' 
                        id='select-a-teacher'
                        onClick={() => setShowClassModuleDropdown(true)}
                        ref={refClassModule}>
                        ClassModule <div className='dropdown-icon'/>
                    </div>
                    {
                        selectedCourse === true ?
                            <div className='selected-teacher'>x {teacherCourseNameInput}</div>
                        : []
                    }
                </div>
                { showClassModuleDropdown && (
                    <div className='select-teacher-dropdown'>
                        {
                            classModule.map((classModule) => (
                                <>    
                                    <div 
                                        className='select-course-dropdown-label'
                                        onClick={ () => {
                                            setTeacherCourseNameInput(classModule.moduleName);
                                            setSelectedCourse(true)
                                        }}>
                                        {classModule.moduleName}
                                    </div>
                                    <hr className='select-form-hr'/>
                                </>
                            ))
                        }
                    </div>)}

                <div 
                    onClick={() => setShowCreateUser(false)}
                    className='close-pop-up-icon' />
                <div 
                    className='create-pop-up-button'
                    onClick={signUp}
                >Create</div>
                <div style={{paddingBottom: '5rem'}}/>
        </div>

    );
}

export default CreateUser;