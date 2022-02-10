import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Import the amplify API and components to handle the 
// requests.
import { Storage, API, graphqlOperation } from "aws-amplify";
import { listModuleChapters, listFiles } from '../../../../../../graphql/queries';
import * as mutations from '../../../../../../graphql/mutations';
import awsExports from '../../../../../../aws-exports';

//import the styling compnent(s).
import './lessons.css'; 
import '../classComponent.css';

//import all components that will be 
//displayed on the page.
import ClassHeader from '../ClassHeader';
import HeaderAndSideNav from '../../../../Components/HeaderAndSideNav';


function Lessons() {

    const [tabContent, setTabContent] = useState('lessons');
    const [chosedModule, setChosedModule] = useState(true);

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(true);
    const [activeTab, setActiveTab] = useState('department');

    const [showCreateModuleChapter, setShowCreateModuleChapter] = useState(false)
    const [moduleChapterNameInputValue, setModuleChapterNameInputValue] = useState('')

    const [moduleChapter, setModuleChapter] = useState([]);
    const [moduleChapterID, setModuleChapterID] = useState('Not Found');

    const [file, setFile] = useState([]);
    const [fileUrl, setFileUrl] = useState('');
    const [fileName, setFileName] = useState('');

    let location = useLocation();
    
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
    })
    : location.state.moduleDetails ? (
    {
        id: location.state.moduleDetails.id,
        classID: location.state.moduleDetails.classID,
        moduleName: location.state.moduleDetails.moduleName,
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

    /* fetch the list of all Module Chapter */
    useEffect( () => {
            
        const fetchModuleChapter = async () => {
            try {
                const moduleChapterResults = await API.graphql(
                    graphqlOperation(listModuleChapters)
                )
                const moduleChapter = moduleChapterResults.data.listModuleChapters.items
                setModuleChapter(moduleChapter)

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
                activeTab={activeTab} />

            <div className='staff-pages-content'>

                <ClassHeader 
                    tabContent={tabContent}
                    chosedModule={chosedModule} 
                    moduleDetails={moduleDetail} 
                    qualificationDetails={qualificationDetails} />

                <div className='class-page-content'>

                    <div className='title'>{moduleDetail.moduleName}</div>


                    <div className='chapter-semester-container'>
                        <div style={{width: '70%', cursor: 'pointer'}}>
                            <div 
                                className='exams-calendar-tilte'
                                onClick={() => setShowCreateModuleChapter(true)}>
                                Add a new chapter <div className='access'>+</div>
                            </div> 
                        </div>

                        <div className="chapter-container">

                            {
                                moduleChapter.map((item) => 
                                    <div key={item.id}>
                                        <div className='class-exams-calendar-tilte'>
                                            Chapter: {item.chapterName}
                                        </div>
                                        <div className='add-a-material'>
                                            Add a material <br/>
                                            <input 
                                                type='file'
                                                onChange={onChangeHandler}
                                                onClick={()=> setModuleChapterID(item.id)} />
                                            { moduleChapterID===item.id ? 
                                                <div className='list-of-materials-uploaded'>
                                                    <img src={fileUrl} alt='' className='uploadprevu'/>
                                                    <div className='documentTitle'>{fileName}</div>
                                                    <div className='download-icon'/>
                                                </div> : []
                                            }
                                        </div>

                                        <h2 style={{marginLeft: '2rem'}}>List Of Materials</h2>
                                            {
                                                file.map((item) => (
                                                <div className='list-of-materials-uploaded'>
                                                    <img 
                                                        src={'https://s3-us-east-2.amazonaws.com/vincoelearningbucket81733-dev/public/'+item.key} 
                                                        alt='' className='uploadprevu'/>
                                                    <div className='documentTitle'>{item.key}</div>
                                                    <div className='download-icon'/>
                                                </div>)) 
                                            }
                                        <hr className='staff-page-hr'/>
                                    </div>
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
                    <div className='pop-up-title'>Create a new module chapter</div>
                    <input
                        className='lg-pop-up-input'
                        placeholder='Module Chapter Name'
                        value={moduleChapterNameInputValue}
                        onChange={e => setModuleChapterNameInputValue(e.target.value)}
                    />
                    <div 
                        className='close-pop-up-icon' 
                        onClick={ () => setShowCreateModuleChapter(false)} />
                    <div 
                        onClick={ createNewModuleChapter } 
                        className='create-pop-up-button'
                    >Create</div>
            </div>
        </div>
    );
}

export default Lessons;