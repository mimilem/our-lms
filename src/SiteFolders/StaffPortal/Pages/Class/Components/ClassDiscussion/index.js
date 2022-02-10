import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './classDiscussion.css';

import ClassHeader from '../ClassHeader';
import HeaderAndSideNav from '../../../../Components/HeaderAndSideNav';
import ClassDiscussionTab from './Components/ClassDiscussionTab';
import ClassMessageArea from './Components/ClassMessageArea';
import ClassMessageList from './Components/ClassMessageList';


function ClassDiscussion() {

    const [tabContent, setTabContent] = useState('discussion');
    const [chosedModule, setChosedModule] = useState(true);

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(true);
    const [activeTab, setActiveTab] = useState('department');

    const [messageInput, setMessageInput] = useState('')
    const [message, setMessage] = useState('')
    const [sendMessage, setSendMessage] = useState(false)

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
    
    return (
        <div className="discussion-pages-container">

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

                    <div className='discussion-container'>
                        <ClassMessageList 
                            messageInput={messageInput} 
                            setMessageInput={setMessageInput} 
                            sendMessage={sendMessage} />
                        <ClassDiscussionTab
                            moduleName={moduleDetail.moduleName} />
                        <ClassMessageArea 
                            messageInput={messageInput} 
                            setMessageInput={setMessageInput} 
                            setSendMessage={setSendMessage} />
                    </div>

                </div>
            </div>            
        </div>
    );
}

export default ClassDiscussion;