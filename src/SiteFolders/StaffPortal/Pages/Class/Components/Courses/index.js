import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDetectClickOutside } from 'react-detect-click-outside';

// Import the amplify API and components to handle the 
// requests.
import { API, graphqlOperation } from "aws-amplify";
import { listClassModules } from '../../../../../../graphql/queries';
import * as mutations from '../../../../../../graphql/mutations';

//import the styling compnent(s).
import './class-courses.css';

import ClassHeader from '../ClassHeader';
import HeaderAndSideNav from '../../../../Components/HeaderAndSideNav';
import CreateNewCourse from './Components/CreateNewCourse';


function Courses() {

    const [tabContent, setTabContent] = useState('modules')
    const [chosedModule, setChosedModule] = useState(false)

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(true);
    const [activeTab, setActiveTab] = useState('department');
    const [choosedCampus, setChoosedCampus] = useState(true);

    // State to keep and update the input value when the admin create 
    // an instance.
    const [courseNameInputValue, setCourseNameInputValue] = useState('');
    const [courseCodeInput, setCourseCodeInput] = useState('')
    const [courseCreditInput, setCourseCreditInput] = useState('')
    const [courseTeacherInput, setCourseTeacherInput] = useState('')
    const [coursePeriodInput, setCoursePeriodInput] = useState('');
    const [courseIsPeriodAllYear, setCourseIsPeriodAllYear] = useState(true);
    const [courseCompulsoryInput, setCourseCompulsoryInput] = useState(true)
    const [courseDescriptionInput, setCourseDescriptionInput] = useState('')

    const courseStateDetails = {
        courseNameInputValue, 
        setCourseNameInputValue,
        courseCodeInput, 
        setCourseCodeInput,
        courseCreditInput, 
        setCourseCreditInput,
        courseTeacherInput, 
        setCourseTeacherInput,
        coursePeriodInput, 
        setCoursePeriodInput,
        courseIsPeriodAllYear, 
        setCourseIsPeriodAllYear,
        courseCompulsoryInput, 
        setCourseCompulsoryInput,
        courseDescriptionInput, 
        setCourseDescriptionInput,
    }

    // Initial state to display the pop-out screens. 
    const [showCreateCourse, setShowCreateCourse] = useState(false);
    //used to create new ClassModule
    const [classModules, setClassModules] = useState([]);

    const [showTeacherDropdown, setShowTeacherDropdown] = useState(false);
    const [showSemesterDropdown, setShowSemesterDropdown] = useState(false);
    const [showMonthDropdown, setShowMonthDropdown] = useState(false);

    const showFormDropdowns = {
        showTeacherDropdown, 
        setShowTeacherDropdown,
        showSemesterDropdown, 
        setShowSemesterDropdown,
        showMonthDropdown, 
        setShowMonthDropdown
    }

    const [selectedTeacher, setSelectedTeacher] = useState(false);
    const [selectedPeriod, setSelectedPeriod] = useState(false);
    const [isMonthChecked, setIsMonthChecked] = useState(false);

    const selectedFromInputForm = {
        selectedTeacher, 
        setSelectedTeacher,
        selectedPeriod, 
        setSelectedPeriod,
        isMonthChecked, 
        setIsMonthChecked
    }

    const [semesters, setSemesters] = useState([{
            id:1,
            value:'semester 1'
        },
        {
            id: 2,
            value:'semester 2'
    }])

    const [months, setMonths] = useState([{
            id:1,
            value:'January',
            isChecked: false
        },
        {
            id: 2,
            value:'February',
            isChecked: false
        },
        {
            id: 3,
            value:'March',
            isChecked: false
        },
        {
            id: 4,
            value:'April',
            isChecked: false
        },
        {
            id: 5,
            value:'May',
            isChecked: false
        },
        {
            id: 6,
            value:'June',
            isChecked: false
        },
        {
            id: 7,
            value:'July',
            isChecked: false
        },
        {
            id: 8,
            value:'August',
            isChecked: false
        },
        {
            id: 9,
            value:'September',
            isChecked: false
        },
        {
            id: 10,
            value:'October',
            isChecked: false
        },
        {
            id: 11,
            value:'November',
            isChecked: false
        },
        {
            id: 12,
            value:'December',
            isChecked: false
        },
    ])

    const closeTeacherDropdown = () => {
        setShowTeacherDropdown(false);
    }
    const refTeacher = useDetectClickOutside({ onTriggered: closeTeacherDropdown });

    const closeSemesterDropdown = () => {
        setShowSemesterDropdown(false);
    }
    const refSemester = useDetectClickOutside({ onTriggered: closeSemesterDropdown });

    const closeMonthDropdown = () => {
        setShowMonthDropdown(false);
    }
    const refMonth = useDetectClickOutside({ onTriggered: closeMonthDropdown });

    // Receive states from DepartmentList Component
    let location = useLocation();
    
    const campusId = location.state.campusId

    const qualificationDetails = location.state.qualificationItemMap !== undefined ? {
            qualificationId: location.state.qualificationItemMap.id,
            departmentId: location.state.qualificationItemMap.departmentID,
            qualificationName: location.state.qualificationItemMap.qualificationName,
            qualificationLevel: location.state.qualificationItemMap.qualificationLevel,
            qualificationYear: location.state.qualificationItemMap.qualificationYear,
        }
        : 
        {
            qualificationId:location.state.qualificationDetails.qualificationId,
            departmentId: location.state.qualificationDetails.departmentID,
            qualificationName: location.state.qualificationDetails.qualificationName,
            qualificationLevel:location.state.qualificationDetails.qualificationLevel,
            qualificationYear:location.state.qualificationDetails.qualificationYear,
    } 
    
    const moduleDetails = location.state.moduleDetails && {
        id: location.state.moduleDetails.id,
        classID: location.state.moduleDetails.classID,
        departmentId: location.state.moduleDetails.departmentId,
        moduleName: location.state.moduleDetails.moduleName,
    }

    const teacherNameData = {
        name:'Jacob Malu'
    }

    // This Function is used to create a new ClassModule
    // then reload the page.
    const createNewCourse = async () => {
        const moduleDetails = {
            moduleName: courseNameInputValue,
            courseCode: courseCodeInput,
            teacherName: courseTeacherInput,
            coursePeriod: coursePeriodInput,
            courseCredit: courseCreditInput,
            courseIsCompulsory: courseCompulsoryInput,
            courseDescription: courseDescriptionInput,
            classID: qualificationDetails.qualificationId
        };
        const newModule = await API.graphql({ 
            query: mutations.createClassModule, 
            variables: {input: moduleDetails}
        });
        window.location.reload(false);
    }

    /* fetch the list of all ClassModule */
    useEffect( () => {
        //automatically scroll to top
        window.scrollTo(0,0);

        const fetchModules = async () => {
            try {
                const classModuleResults = await API.graphql(
                    graphqlOperation(listClassModules)
                )
                const classModule = classModuleResults.data.listClassModules.items
                setClassModules(classModule)
            } 
            catch (error) {
                console.log(error)
                console.log('ClassID missing')
            }
        }
        fetchModules();
    }, [])

    return (
        <div className="staff-pages-container">

            <HeaderAndSideNav
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab}
                choosedCampus={choosedCampus}
                campusId={campusId} />

            <div className='staff-pages-content'>

                <ClassHeader 
                    tabContent={tabContent} 
                    chosedModule={chosedModule} 
                    qualificationDetails={qualificationDetails}
                    moduleDetails={moduleDetails}
                    campusId={campusId} />

                    <div 
                        className='class-course-add-button'
                        title='Create a new course.'
                        onClick={ () => setShowCreateCourse(true) } />

                { classModules.map((moduleDetail) =>
                    moduleDetail.id && ( 
                        moduleDetail.classID === qualificationDetails.qualificationId ? 
                            <Link to={{     
                                pathname:'/Staff/Departments/Lessons',
                                state: {qualificationDetails, moduleDetail, campusId} }} 
                                key={moduleDetail.id}>
                                    <div 
                                        style={{marginTop: '1rem' }} 
                                        className='active-department-list-title'
                                        title={moduleDetail.courseDescription}
                                        onClick={()=> setChosedModule(true)}>
                                        {moduleDetail.moduleName} <div className='access'>{`>`}</div>
                                    </div> 
                            </Link> : [])
                )}
                
                {/* The Pup-out window that allows the admin to create */}
                {/* a new module. */}
                {/* By default the display is set to false */}
                <CreateNewCourse 
                    showCreateCourse={showCreateCourse}
                    setShowCreateCourse={setShowCreateCourse}
                    createNewCourse={createNewCourse}
                    courseStateDetails={courseStateDetails}
                    showFormDropdowns={showFormDropdowns}
                    selectedFromInputForm={selectedFromInputForm}
                    semesters={semesters} 
                    setSemesters={setSemesters}
                    months={months}
                    setMonths={setMonths}
                    refTeacher={refTeacher}
                    refSemester={refSemester}
                    refMonth={refMonth}
                    teacherNameData={teacherNameData}
                />
            </div>
        </div>
    );
}

export default Courses;