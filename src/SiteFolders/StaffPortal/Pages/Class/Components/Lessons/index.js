import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Import the amplify API and components to handle the 
// requests.
import { Storage, API, graphqlOperation } from "aws-amplify";
import { listModuleChapters, listFiles, listLessons, listLessonTimeTables } from '../../../../../../graphql/queries';
import * as mutations from '../../../../../../graphql/mutations';
import awsExports from '../../../../../../aws-exports';

//import the styling compnent(s).
import './lessons.css'; 
import '../classComponent.css';

//import all components that will be 
//displayed on the page.
import ClassHeader from '../ClassHeader';
import HeaderAndSideNav from '../../../../Components/HeaderAndSideNav';
import LessonDashboard from './LessonDashboard';


function Lessons() {

    const [tabContent, setTabContent] = useState('lessons');
    const [chosedModule, setChosedModule] = useState(true);

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(true);
    const [activeTab, setActiveTab] = useState('department');
    const [choosedCampus, setChoosedCampus] = useState(true);

    const [showCreateModuleChapter, setShowCreateModuleChapter] = useState(false)
    const [moduleChapterNameInputValue, setModuleChapterNameInputValue] = useState('')

    const [moduleChapter, setModuleChapter] = useState([]);
    const [moduleChapterID, setModuleChapterID] = useState('Not Found');

    const [lesson, setLesson] = useState([])
    const [newLessonID, setNewLessonID] = useState([])
    const [lessonNameInputValue, setLessonNameInputValue] = useState('')
    const [showCreateLesson, setShowCreateLesson] = useState(false)

    const [showLessonWindow, setShowLessonWindow] = useState(false)

    const [file, setFile] = useState([]);
    const [fileUrl, setFileUrl] = useState('');
    const [fileName, setFileName] = useState('');

    const [lessonTimeTableDayInputValue, setLessonTimeTableDayInputValue] = useState([])
    const [lessonTimeTableStartTimeInputValue, setLessonTimeTableStartTimeInputValue] = useState([])
    const [lessonTimeTableEndTimeInputValue, setLessonTimeTableEndTimeInputValue] = useState([])

    let location = useLocation();

    const campusId = location.state.campusId
    
    const qualificationDetails = {
        qualificationId: location.state.qualificationDetails.qualificationId,
        departmentId: location.state.qualificationDetails.departmentId,
        qualificationName: location.state.qualificationDetails.qualificationName,
        qualificationLevel: location.state.qualificationDetails.qualificationLevel,
        qualificationYear: location.state.qualificationDetails.qualificationYear,
    }
    
    const moduleDetail =  location.state.moduleDetail ? ({
        id: location.state.moduleDetail.id,
        classID: location.state.moduleDetail.classID,
        moduleName: location.state.moduleDetail.moduleName,
        courseCode: location.state.moduleDetail.courseCode,
        teacherName: location.state.moduleDetail.teacherName,
        coursePeriod: location.state.moduleDetail.coursePeriod,
        courseCredit: location.state.moduleDetail.courseCredit,
        courseIsCompulsory: location.state.moduleDetail.courseIsCompulsory,
        courseDescription: location.state.moduleDetail.courseDescription,
    })
    : location.state.moduleDetails ? (
    {
        id: location.state.moduleDetails.id,
        classID: location.state.moduleDetails.classID,
        moduleName: location.state.moduleDetails.moduleName,
        courseCode: location.state.moduleDetails.courseCode,
        teacherName: location.state.moduleDetails.teacherName,
        coursePeriod: location.state.moduleDetails.coursePeriod,
        courseCredit: location.state.moduleDetails.courseCredit,
        courseIsCompulsory: location.state.moduleDetails.courseIsCompulsory,
        courseDescription: location.state.moduleDetails.courseDescription,
    }) :[]

    // This Function is used to create a new Module Chapter
    // then reload the page.
    const createNewModuleChapter = async () => {
        const moduleChapterDetails = {
            chapterName: moduleChapterNameInputValue,
            classModuleID: moduleDetail.id
        };
        const newModuleChapter = await API.graphql({ 
            query: mutations.createModuleChapter, 
            variables: {input: moduleChapterDetails}
        });
        window.location.reload(false);
    }

    // This Function is used to create a new Lesson
    // then reload the page.
    const createLesson = async () => {
        const lessonDetails = {
            lessonName: lessonNameInputValue,
            moduleChapterID: moduleChapterID
        };
        const newLesson = await API.graphql({ 
            query: mutations.createLesson, 
            variables: {input: lessonDetails}
        });
        setNewLessonID(newLesson.data.createLesson.id)

        const lessonTimeTableDetails = {
            lessonName: lessonNameInputValue,
            day: lessonTimeTableDayInputValue,
            startTime: lessonTimeTableStartTimeInputValue,
            endTime: lessonTimeTableEndTimeInputValue,
            lessonID: newLessonID
        };
        const newlessonTimeTable = await API.graphql({ 
            query: mutations.createLessonTimeTable, 
            variables: {input: lessonTimeTableDetails}
        });
        window.location.reload(false);
    }

    async function onChangeHandler(e) {
        
        const file = e.target.files[0];

        setFileUrl(URL.createObjectURL(file))
        setFileName(file.name)

        Storage.put(file.name, file, { contentType: ''})
        .then (()=> {
            console.log('successfully saved file')

            //create dynamoDB files
            const fileDetails = {
                name: file.name,
                moduleChapterID: moduleChapterID,
                file: {
                    bucket: awsExports.aws_user_files_s3_bucket,
                    region: awsExports.aws_user_files_s3_bucket_region,
                    key: file.name
                }
            }
            API.graphql({
                query: mutations.createFile,
                variables: {input: fileDetails}
            });
            
            console.log('successfully Added')
            window.location.reload(false);
        })
        .catch(err => console.log('error upload file!', err))
    }

    /* fetch the list of all Module Chapter && lessons */
    useEffect( () => {
            
        const fetchModuleChapter = async () => {
            try {
                const moduleChapterResults = await API.graphql(
                    graphqlOperation(listModuleChapters)
                )
                const moduleChapter = moduleChapterResults.data.listModuleChapters.items
                setModuleChapter(moduleChapter)

                const lessonsResults = await API.graphql(
                    graphqlOperation(listLessons)
                )
                const Lessons = lessonsResults.data.listLessons.items
                setLesson(Lessons)

                Storage.list('') // for listing ALL files without prefix, pass '' instead
                .then(result => {
                    setFile(result)
                    console.log(result)
                })
                .catch(err => console.log(err));
            } 
            catch (error) {
                console.log(error)
            }
        }
        fetchModuleChapter();
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
                    moduleDetails={moduleDetail} 
                    qualificationDetails={qualificationDetails}
                    campusId={campusId} />

                <div className='class-page-content'>
                    <div style={{display: showLessonWindow === true ? '' : 'none' }} >
                        <LessonDashboard />
                    </div>
                    
                    <div className='course-module-title'>{moduleDetail.moduleName}</div>

                    <div className='chapter-semester-container'>
                        <div>
                            <div className='moduleIntro'>Introduction</div>
                            <p>{moduleDetail.courseDescription}</p>
                            <b>by: {moduleDetail.teacherName}</b>
                        </div>

                        <div className="chapter-container">

                            <div 
                                className='add-module' 
                                style={{fontSize: 15}} 
                                onClick={() => setShowCreateModuleChapter(true)}>
                                New Module
                                <div 
                                    className='module-add-button' 
                                    title='Create a module.'/>
                            </div>
                            { 
                                moduleChapter.map((moduleChapterMapItem) => 
                                moduleChapterMapItem.classModuleID === moduleDetail.id ?
                                
                                    <div key={moduleChapterMapItem.id}>     

                                        <div className='exams-calendar-tilte' style={{fontSize: '18px', alignItems:'center'}}>
                                            Chapter: {moduleChapterMapItem.chapterName}
                                        </div>
                                        <div className='add-a-material'>
                                            Add a material <br/>
                                            <input 
                                                type='file'
                                                onChange={onChangeHandler}
                                                onClick={()=> setModuleChapterID(moduleChapterMapItem.id)} />
                                            { moduleChapterID===moduleChapterMapItem.id ? 
                                                <div className='list-of-materials-uploaded'>
                                                    <img src={fileUrl} alt='' className='uploadprevu'/>
                                                    <div className='documentTitle'>{fileName}</div>
                                                    <div className='download-icon'/>
                                                </div> : []
                                            }
                                        </div>
                                        {   moduleChapterID===moduleChapterMapItem.id ? 
                                            file.map((fileMapItem) => (
                                            <div className='list-of-materials-uploaded'>
                                                <img 
                                                    src={'https://s3-us-east-2.amazonaws.com/vincoelearningbucket81733-dev/public/'+fileMapItem.key} 
                                                    alt='' className='uploadprevu'/>
                                                <div className='documentTitle'>{fileMapItem.key}</div>
                                                <div className='download-icon'/>
                                            </div>) ) : []
                                        }


                                        <div>
                                            <h2 style={{marginLeft: '2rem'}}>Lessons</h2>
                                            <div 
                                                className='add-lesson' 
                                                style={{fontSize: 15}}
                                                title='Add a new lesson'
                                                onClick={() => {
                                                    setShowCreateLesson(true)
                                                    setModuleChapterID(moduleChapterMapItem.id)}}>
                                                New Lesson <div className='add-button-icon'/>
                                            </div>
                                            
                                            <ul className='lesson-element-container'>
                                                {
                                                    lesson.map(lessonMapItem => 
                                                        lessonMapItem.moduleChapterID === moduleChapterMapItem.id ?
                                                        
                                                <li 
                                                    onClick={() => setShowLessonWindow(true)} 
                                                    className='lesson-element'>
                                                        {lessonMapItem.lessonName}
                                                </li>
                                                : []
                                                )}
                                            </ul>
                                            
                                        </div>
                                        <hr className='staff-page-hr'/>
                                    </div>: []
                                ) 
                            }
                        </div>
                    </div> 

                </div>
            </div>

            {/* The Pup-out window that allows the admin to create */}
            {/* a new Module Chapter. */}
            {/* By default the display is set to false */}
            <div 
                className='pop-out-window'
                style={{ display:showCreateModuleChapter === false ? 'none' : ''}} >
                    <div className='pop-up-title'>Add a new Module</div>
                    <input
                        className='lg-pop-up-input'
                        placeholder='Module Name'
                        value={moduleChapterNameInputValue}
                        onChange={e => setModuleChapterNameInputValue(e.target.value)}
                    />

                    <div style={{marginLeft: '7rem'}}>
                        <h2>Add a material</h2> 
                        <input 
                            placeholder='Add a material'
                            type='file'
                            onChange={onChangeHandler}/>
                    </div>

                    <div 
                        className='close-pop-up-icon' 
                        onClick={ () => setShowCreateModuleChapter(false)} />
                    <div 
                        onClick={ createNewModuleChapter } 
                        className='create-pop-up-button'
                    >Add</div>
            </div>

            {/* The Pup-out window that allows the admin to create */}
            {/* a new lesson. */}
            {/* By default the display is set to false */}
            <div 
                className='pop-out-window'
                style={{ display:showCreateLesson === false ? 'none' : ''}} >
                    <div className='pop-up-title'>Add a new lesson</div>
                    <input
                        className='lg-pop-up-input'
                        placeholder='Lesson Name'
                        value={lessonNameInputValue}
                        onChange={e => setLessonNameInputValue(e.target.value)}
                    />

                    <div className='timeTable'>
                        <h2>Time Table</h2>
                        <div className='create-timeTableDay'>
                            <div>
                                <div className='create-timeTableDay-element'>
                                    <input 
                                        type='checkbox'
                                        value="Monday"
                                        onClick={() => setLessonTimeTableDayInputValue("Monday")}/>
                                        Monday
                                </div>
                                <div className='create-timeTableDay-element'>
                                    <input 
                                        type='checkbox'
                                        value="Tuesday"
                                        onClick={() => setLessonTimeTableDayInputValue(prevState =>
                                            prevState + "Tuesday"
                                        )}/>
                                        Tuesday
                                </div>
                                <div className='create-timeTableDay-element'>
                                    <input type='checkbox'/>Wednesday
                                </div>
                                <div className='create-timeTableDay-element'>
                                    <input type='checkbox'/>Thursday
                                </div>
                                <div className='create-timeTableDay-element'>
                                    <input type='checkbox'/>Friday
                                </div>
                                <div className='create-timeTableDay-element'>
                                    <input type='checkbox'/>Saturday
                                </div>
                                <div className='create-timeTableDay-element'>
                                    <input type='checkbox'/>Sunday
                                </div>
                            </div>
                            <div>
                                <div>
                                    From <input 
                                        className='create-timeTableHour-element' 
                                        type='time'
                                        onChange={(e)=> setLessonTimeTableStartTimeInputValue(e.target.value)}/> - To <input 
                                        className='create-timeTableHour-element' 
                                        type='time'
                                        onChange={(e)=> setLessonTimeTableEndTimeInputValue(e.target.value)}/>
                                </div>
                                <div>
                                    From <input className='create-timeTableHour-element' type='time'/> - To <input 
                                    className='create-timeTableHour-element' type='time'/>
                                </div>
                                <div>
                                    From <input className='create-timeTableHour-element' type='time'/> - To <input 
                                    className='create-timeTableHour-element' type='time'/>
                                </div>
                                <div>
                                    From <input className='create-timeTableHour-element' type='time'/> - To <input 
                                    className='create-timeTableHour-element' type='time'/>
                                </div>
                                <div>
                                    From <input className='create-timeTableHour-element' type='time'/> - To <input 
                                    className='create-timeTableHour-element' type='time'/>
                                </div>
                                <div>
                                    From <input className='create-timeTableHour-element' type='time'/> - To <input 
                                    className='create-timeTableHour-element' type='time'/>
                                </div>
                                <div>
                                    From <input className='create-timeTableHour-element' type='time'/> - To <input 
                                    className='create-timeTableHour-element' type='time'/>
                                </div>
                                
                            </div>
                        </div>
                        <div className='lessonType'>
                            <h2>Lesson Type</h2>
                            <div className='lessonType-element-container'>
                                <div className='lessonType-element'>
                                    <input type='checkbox' />
                                    Online
                                </div>
                                <div className='lessonType-element'>
                                    <input type='checkbox' />
                                    On Site
                                </div>
                            </div>
                        </div>
                    </div>

                    <div 
                        className='close-pop-up-icon' 
                        onClick={ () => setShowCreateLesson(false)} />
                    <div 
                        onClick={ createLesson } 
                        className='create-pop-up-button'
                    >Add</div>
            </div>
        </div>
    );
}

export default Lessons;