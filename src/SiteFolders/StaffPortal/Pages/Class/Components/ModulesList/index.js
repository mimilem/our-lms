import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDetectClickOutside } from 'react-detect-click-outside';

// Import the amplify API and components to handle the 
// requests.
import { Storage, API, graphqlOperation } from "aws-amplify";
import { listClassModules } from '../../../../../../graphql/queries';
import * as mutations from '../../../../../../graphql/mutations';

//import the styling compnent(s).
import './module-list.css';

import ClassHeader from '../ClassHeader';
import HeaderAndSideNav from '../../../../Components/HeaderAndSideNav';


function ModulesList() {

    const [tabContent, setTabContent] = useState('modules')
    const [chosedModule, setChosedModule] = useState(false)

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(true);
    const [activeTab, setActiveTab] = useState('department');
    const [choosedCampus, setChoosedCampus] = useState(true);

    // State to keep and update the input value when the admin create 
    // an instance.
    const [moduleNameInputValue, setModuleNameInputValue] = useState('');
    const [courseCodeInput, setCourseCodeInput] = useState('')
    const [courseCreditInput, setCourseCreditInput] = useState('')
    const [courseTeacherInput, setCourseTeacherInput] = useState('')
    const [coursePeriodInput, setCoursePeriodInput] = useState('');
    const [courseIsPeriodAllYear, setCourseIsPeriodAllYear] = useState(true);
    const [courseCompulsoryInput, setCourseCompulsoryInput] = useState(true)
    const [courseDescriptionInput, setCourseDescriptionInput] = useState('')

    // Initial state to display the pop-out screens. 
    const [showCreateModule, setShowCreateModule] = useState(false);
    //used to create new ClassModule
    const [classModules, setClassModules] = useState([]);

    const [showTeacherDropdown, setShowTeacherDropdown] = useState(false);
    const [showSemesterDropdown, setShowSemesterDropdown] = useState(false);
    const [showMonthDropdown, setShowMonthDropdown] = useState(false);

    const [selectedTeacher, setSelectedTeacher] = useState(false);
    const [selectedPeriod, setSelectedPeriod] = useState(false);
    const [isMonthChecked, setIsMonthChecked] = useState(false);

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
    const createNewModule = async () => {
        const moduleDetails = {
            moduleName: moduleNameInputValue,
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

                <div className='add-new-module'>
                    <div 
                        className='active-department-list-title' 
                        onClick={ () => setShowCreateModule(true) }>
                        Add a new course <div className='access'>+</div>
                    </div> 
                </div>
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
                <div 
                    className='pop-out-window'
                    style={{ display:showCreateModule === false ? 'none' : '' }} >
                        <div className='create-course-pop-up-title'>
                            Create a new Course
                        </div>
                        
                        <input
                            className='create-course-input'
                            placeholder='Course Name'
                            value={moduleNameInputValue}
                            onChange={e => setModuleNameInputValue(e.target.value)}
                        />
                        <input
                            className='create-course-input'
                            placeholder='Code'
                            onChange={e => setCourseCodeInput(e.target.value)}
                        />
                        <input
                            className='create-course-input'
                            placeholder='Credit'
                            value={courseCreditInput}
                            onChange={e => setCourseCreditInput(e.target.value)}
                        />

                        <div style={{display: 'flex'}}>
                            <div 
                                className='create-course-input' 
                                id='select-a-teacher'
                                onClick={() => setShowTeacherDropdown(true)}
                                ref={refTeacher} >
                                Select a teacher <div className='dropdown-icon'/>
                            </div>
                            {
                                selectedTeacher === true ?
                                <div className='selected-teacher'>x {teacherNameData.name}</div>
                                : []
                            }
                        </div>
                        { showTeacherDropdown && (
                        <div className='select-course-dropdown'>
                            <div 
                                className='select-course-dropdown-label'
                                onClick={() => setSelectedTeacher(true)}>
                                {teacherNameData.name}
                            </div>            
                            <hr className='select-form-hr'/>
                            <div className='select-course-dropdown-label'>
                                Antoine Griz
                           </div>  
                        </div>)}

                        <div style={{marginLeft:'7.5rem', marginTop:15}}>
                            <div 
                                style={{
                                    fontSize:20, 
                                    fontWeight:'bold',
                                    marginBottom: 15
                                }}>Select a period
                            </div>
                            <div style={{display: 'block', width: '100%'}}>
                                <div style={{display:'flex', marginTop:15, marginBottom: 20}}>
                                    <input 
                                        type='checkbox'
                                        style={{marginTop: 5}}
                                        checked={courseIsPeriodAllYear === false ? true : false}
                                        onClick={() => {
                                            setCourseIsPeriodAllYear(prevState => (!prevState));
                                            setCoursePeriodInput(courseIsPeriodAllYear === true ? "All Year" : '');
                                            setSelectedPeriod(true);
                                        }} />
                                        <div style={{fontSize:16}}>All Year</div>
                                </div>

                                <div>
                                    <div 
                                        className='create-course-input' 
                                        id='select-a-period'
                                        onClick={() => setShowSemesterDropdown(true)}
                                        ref={refSemester} >
                                        Select a Semester <div className='dropdown-icon'/>
                                    </div>
                                    { selectedPeriod === true ?
                                        <div className='selected-semester'>x {coursePeriodInput}</div>
                                        :[]
                                    }
                                </div>
                                { showSemesterDropdown && (
                                    <div className='select-period-dropdown'>
                                        {
                                            semesters.map((semester) => (
                                                <>    
                                                    <div 
                                                        className='select-course-dropdown-label'
                                                        onClick={ () => {
                                                            setCourseIsPeriodAllYear(true);
                                                            setCoursePeriodInput(semester.value);
                                                            setSelectedPeriod(true);
                                                        }}>
                                                        {semester.value}
                                                    </div>
                                                    <hr className='select-form-hr'/>
                                                </>
                                            ))
                                        }
                                    </div>)}

                                <div 
                                    className='create-month-input' 
                                    id='select-a-period'
                                    onClick={() => setShowMonthDropdown(true)}
                                    ref={refMonth} >
                                    Monthly <div className='dropdown-icon'/>
                                    { showMonthDropdown && (
                                    <div className='select-month-dropdown'>
                                        {
                                            months.map(month => (
                                                <div className='select-course-dropdown-label'>
                                                    <>
                                                        <input 
                                                            type='checkbox'
                                                            checked={month.isChecked === true ? true : false}
                                                            onClick={() => {
                                                                setCoursePeriodInput(prevState => prevState !== undefined || '' ?
                                                                `${prevState}, ${month.value}` : coursePeriodInput);
                                                                setIsMonthChecked(!month.isChecked);
                                                                setSelectedPeriod(true);
                                                            }}/> 
                                                        {month.value}
                                                        <hr className='select-form-hr'/>
                                                    </>
                                                </div>
                                            ))
                                        }
                                    </div>)}
                                </div>

                                <div className='create-course-input'>
                                </div>
                            </div>
                        </div>

                        <div style={{marginLeft:'7.5rem', marginTop:'-2rem', marginBottom:'2rem'}}>
                            <div 
                                style={{
                                    fontSize:20, 
                                    marginBottom: 15
                                    }}>Is the course compulsory ?
                                    <div style={{display:'flex', marginTop:15, marginBottom: 20}}>
                                        <input 
                                            type='checkbox'
                                            style={{marginTop: 5}} 
                                            defaultChecked={true}
                                            checked={courseCompulsoryInput === true ? true : false}
                                            onClick={()=> {setCourseCompulsoryInput((prevState) => (!prevState))}}/>
                                            <div style={{fontSize:16}}>Yes</div>
                                        <input 
                                            type='checkbox'
                                            style={{marginTop: 5, marginLeft: '20px'}}
                                            defaultChecked={false}
                                            checked={courseCompulsoryInput === true ? false : true}
                                            onClick={()=> {setCourseCompulsoryInput(false)}} />
                                            <div style={{fontSize:16}}>No</div>
                                    </div>
                            </div>
                        </div>

                        <textarea
                            id='courseOverview'
                            className='create-course-input'
                            placeholder='Course Overview'
                            value={courseDescriptionInput}
                            onChange={e => setCourseDescriptionInput(e.target.value)}
                        />
                        <div 
                            className='close-pop-up-icon' 
                            onClick={ () => setShowCreateModule(false)} />
                        <div 
                            onClick={ createNewModule } 
                            className='create-pop-up-button'
                        >Create</div>
                        <div style={{paddingBottom: '5rem'}}/>
                </div>

            </div>
        </div>
    );
}

export default ModulesList;