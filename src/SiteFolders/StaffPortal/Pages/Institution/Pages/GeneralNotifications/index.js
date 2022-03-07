import React, { useState, useEffect } from 'react';

// Import the amplify API and components to handle the 
// requests.
import { API, graphqlOperation } from "aws-amplify";
import { listNotificationss } from '../../../../../../graphql/queries';
import * as mutations from '../../../../../../graphql/mutations';

import './generalNotifications.css';

import HeaderAndSideNav from '../../../../Components/HeaderAndSideNav';
import SideNavigation from '../../Components/SideNavigation';
import CreateNotifications from './Components/CreateNotifications';

let institutionID = 'e99da62e-0b01-49d9-9dd6-53968544cd86'

function GeneralNotifications() {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('generalNotifications');
    const [choosedCampus, setChoosedCampus] = useState(false);

    const [generalToggledBar, setGeneralToggledBar] = useState(false);

    const [isLoading, setIsLoading] = useState(false)

    const [titleInput, setTitleInput] = useState('')
    const [descriptionInput, setDescriptionInput] = useState('')

    const [notifications, setNotifications] = useState([])
    const [notificationID, setNotificationID] = useState([])

    const [showCreate, setShowCreate] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    let cWeekDay = new Date().getDay()
    let cDay = new Date().getDate();
    let cMonth = new Date().getMonth() + 1;
    let cYear = new Date().getFullYear();

    switch (cMonth) {
        case 1: cMonth = 'January';
        break;
        case 2: cMonth = 'February';
        break;
        case 3: cMonth = 'March';
        break;
        case 4: cMonth = 'April';
        break;
        case 5: cMonth = 'May';
        break;
        case 6: cMonth = 'June';
        break;
        case 7: cMonth = 'July';
        break;
        case 8: cMonth = 'August';
        break;
        case 9: cMonth = 'September';
        break;
        case 10: cMonth = 'October';
        break;
        case 11: cMonth = 'November';
        break;
        case 12: cMonth = 'December';
        break;
        default:
    }

    switch (new Date().getDay()) {
        case 0: cWeekDay = "Sunday";
          break;
        case 1: cWeekDay = "Monday";
          break;
        case 2: cWeekDay = "Tuesday";
          break;
        case 3: cWeekDay = "Wednesday";
          break;
        case 4: cWeekDay = "Thursday";
          break;
        case 5: cWeekDay = "Friday";
          break;
        case 6: cWeekDay = "Saturday";
        break;
        default:
    }

    let currentDate = `${cWeekDay} ${cDay} ${cMonth} ${cYear}`

    let currentTime = new Date().getHours() + ":" + new Date().getMinutes()

    // This Function is used to create a new notification
    // then reload the page.
    const createNotification = async () => {
        const notificationDetails = {
            institutionID: institutionID,
            title: titleInput,
            create_date: currentDate,
            create_time: currentTime,
            description: descriptionInput,
        };
        const newNotification = await API.graphql({ 
            query: mutations.createNotifications, 
            variables: {input: notificationDetails}
        });
        window.location.reload(false);
    }

    // This Function is used to delete a notification
    // then reload the page.
    const deleteNotification = async () => {
        const notificationDetails = {
            id: notificationID,
        };
        const deleteNotification = await API.graphql({ 
            query: mutations.deleteNotifications, 
            variables: {input: notificationDetails}
        });
        window.location.reload(false);
    }

    /* fetch the list of all notifications */
    useEffect( () => {
        //automatically scroll to top
        window.scrollTo(0,0);

        const fetchNotifications = async () => {
            try {
                setIsLoading(true);
                const notificationResults = await API.graphql(
                    graphqlOperation(listNotificationss)
                )
                const notifications = notificationResults.data.listNotificationss.items
                setNotifications(notifications)

                setIsLoading(false)
            } 
            catch (error) {
                console.log(error)
                setIsLoading(false)
            }
        }
        fetchNotifications();
    }, [])
    
    return (
        <div>
            {isLoading ? 
                <div className='loader-container'>
                    <div className='loader' />
                </div>
            : '' }
            <div className='campus-page-content'>

                <HeaderAndSideNav 
                    toggledBar={toggledBar} 
                    setToggledBar={setToggledBar}
                    activeTab={activeTab}
                    choosedCampus={choosedCampus} />

                <SideNavigation 
                    generalToggledBar={generalToggledBar} 
                    setGeneralToggledBar={setGeneralToggledBar}
                    activeTab={activeTab} />

                <div className='generalNotifications-content' > 
                    
                    <div 
                        className='staff-pages-header-tilte' 
                        style={{marginLeft: '3rem'}} >
                        General Notifications
                    </div>
                    
                    <hr className='staff-page-hr' />

                    <div className='notifications-add-container'>
                        <div 
                            onClick={() => setShowCreate(true)}
                            className='add-notification-card'>
                            <div 
                                className='add-notification-icon' 
                                title='Create a Notification' />
                        </div>
                    </div>
                    
                    <div style={{ marginTop: '2rem' }}>
                        {
                        notifications.map(notification =>(
                        <div 
                            className='gradient-blue-card-container' 
                            style={{padding:'1rem', fontSize: '15px'}} >
                                <div 
                                    className='top-left-text' 
                                    style={{padding:'1rem', fontSize: '17px'}} >
                                    {notification.title}
                                </div>
                                <div
                                    onClick={() => {
                                        setShowDelete(true)
                                        setNotificationID(notification.id)
                                        setTitleInput(notification.title)
                                    }}
                                    className='top-right-text'
                                    title={`delete "${notification.title}"`}>
                                    <div className='delete-icon'/>
                                </div>
                                <h4 style={{position: 'absolute', bottom:0, padding:'1rem'}}>
                                    {notification.description}
                                    <br/>
                                </h4>
                                <div style={{fontSize: 11,position: 'absolute', bottom:0, padding:'1rem'}}>
                                    Created: {notification.create_date} at {notification.create_time}
                                </div>
                        </div> ))
                        }
                    </div>
                </div>

                {
                    showDelete === true ? 
                    <div className="delete-pop-up">
                        <div className="delete-pop-up-text">
                            Do you really want to delete "{titleInput}" ?    
                        </div>
                        <div className="delete-pop-up-btns">
                            <div
                                onClick={deleteNotification} 
                                className="delete-pop-up-yes">Yes</div>
                            <div
                                onClick={() => setShowDelete(false)} 
                                className="delete-pop-up-no">No</div>
                        </div>

                    </div>
                    : []
                }

                <CreateNotifications 
                    showCreate={showCreate} 
                    setShowCreate={setShowCreate}
                    createNotification={createNotification}
                    titleInput={titleInput}
                    setTitleInput={setTitleInput}
                    descriptionInput={descriptionInput}
                    setDescriptionInput={setDescriptionInput} />
            </div>
        </div>
    );
}

export default GeneralNotifications;