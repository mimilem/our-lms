import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import the amplify API and components to handle the 
// requests.
import { API, graphqlOperation } from "aws-amplify";
import { listModuleChapters } from '../../../../graphql/queries';
import * as mutations from '../../../../graphql/mutations';

//import the styling compnent(s).
import './module.css';
import '../staffPages.css';

//import all components that will be 
//displayed on the pages.
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';
import HeaderAndSideNav from '../../Components/HeaderAndSideNav';


function ModulePage() {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('moduleShelf');
    const [choosedCampus, setChoosedCampus] = useState(true);

    const [moduleChapter, setModuleChapter] = useState([]);

    const [moduleChapterNameInput, setModuleChapterNameInput] = useState();
    const [showCreateModuleChapter, setShowCreateModuleChapter] = useState(false)
    const [classModuleID, setClassModuleID] = useState(undefined)

    let location = useLocation()

    const campusId = location.state.campusID

    /* fetch the API data of faculties and departements */
    useEffect( () => {
        const fetchModuleChapter = async () => {
            try {
                const moduleChapterResults = await API.graphql(
                    graphqlOperation(listModuleChapters)
                )
                const classModules = moduleChapterResults.data.listModuleChapters.items
                setModuleChapter(classModules)
                console.log(classModules)
            } 
            catch (error) {
                console.log(error)
            }
        }
        fetchModuleChapter();
    }, [])

    // This Function is used to create a new faculty
    // then reload the page.
    const createModuleChapter = async () => {
        const moduleChapterDetails = {
            chapterName: moduleChapterNameInput,
            classModuleID:classModuleID,
        };
        const newModuleChapter = await API.graphql({ 
            query: mutations.createModuleChapter, 
            variables: {input: moduleChapterDetails}
        });
        window.location.reload(false);
    }

    return (
        <div  className="staff-pages-container">

            <HeaderAndSideNav 
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab}
                choosedCampus={choosedCampus}
                campusId={campusId} /> 
                
            <div className='staff-pages-content'>
                <div className='staff-pages-header-tilte'>Module shelf</div>
                
                <hr className='staff-page-hr'/>

                <div 
                    className='add-module-icon'
                    onClick={() => setShowCreateModuleChapter(true)}/>

                { moduleChapter.map((item) =>
                    item.classModuleID == null ?
                        <div className='gradient-blue-card-container'>
                            <div className='top-left-text'>{item.chapterName}</div>
                            <div className='top-right-text'><div className='more-icon'/></div>
                        </div> : [] )
                }
            </div>

            {/* The Pup-out window that allows the admin to create */}
            {/* a new department. */}
            {/* By default the display is set to false */}
            <div 
                className='pop-out-window'
                style={{ display:showCreateModuleChapter === false ? 'none' : ''}} >
                    <div className='pop-up-title'>Create a new module</div>
                    <input
                        className='lg-pop-up-input'
                        placeholder='Module Name'
                        value={moduleChapterNameInput}
                        onChange={e => setModuleChapterNameInput(e.target.value)}
                    />
                    <div 
                        className='close-pop-up-icon' 
                        onClick={ () => setShowCreateModuleChapter(false)} />
                    <div 
                        onClick={ createModuleChapter } 
                        className='create-pop-up-button' >
                            Create
                    </div>
            </div>
            
        </div>
    );
}

export default ModulePage;