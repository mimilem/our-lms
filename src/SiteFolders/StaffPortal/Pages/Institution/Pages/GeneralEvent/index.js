import React, { useState, useEffect } from 'react';

// Import the amplify API and components to handle the 
// requests.
import { API, graphqlOperation } from "aws-amplify";
import { listEventss } from '../../../../../../graphql/queries';
import * as mutations from '../../../../../../graphql/mutations';

import './generalEvents.css';

import HeaderAndSideNav from '../../../../Components/HeaderAndSideNav';
import SideNavigation from '../../Components/SideNavigation';
import CreateEvent from './Components/CreateEvent';

let institutionID = 'e99da62e-0b01-49d9-9dd6-53968544cd86'

function GeneralEvents() {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('generalEvents');
    const [choosedCampus, setChoosedCampus] = useState(false);

    const [generalToggledBar, setGeneralToggledBar] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const [eventID, setEventID] = useState('')
    const [titleInput, setTitleInput] = useState('')
    const [createDate, setCreateDate] = useState('')
    const [createTime, setCreateTime] = useState('')
    const [descriptionInput, setDescriptionInput] = useState('')
    const [placeInput, setPlaceInput] = useState('')
    const [eventDateInput, setEventDateInput] = useState('')

    const [showCreate, setShowCreate] = useState(false)
    const [showDelete, setShowDelete] = useState(false)

    const [events, setEvents] = useState([])

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


    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    // This Function is used to create a new Event
    // then reload the page.
    const createEvent = async () => {
        const eventDetails = {
            institutionID: institutionID,
            title: titleInput,
            create_date: currentDate,
            create_time: currentTime,
            description: descriptionInput,
            event_date: eventDateInput,
            event_place: placeInput,
        };
        const newEvent = await API.graphql({ 
            query: mutations.createEvents, 
            variables: {input: eventDetails}
        });
        window.location.reload(false);
    }
    // This Function is used to delete an Event
    // then reload the page.
    const deleteEvent = async () => {
        const eventDetails = {
            id: eventID,
        };
        const deleteEvent = await API.graphql({ 
            query: mutations.deleteEvents, 
            variables: {input: eventDetails}
        });
        window.location.reload(false);
    }

    /* fetch the list of all events */
    useEffect( () => {
        //automatically scroll to top
        window.scrollTo(0,0);

        const fetchEvents = async () => {
            try {
                setIsLoading(true)
                const eventsResults = await API.graphql(
                    graphqlOperation(listEventss)
                )
                const events = eventsResults.data.listEventss.items
                setEvents(events)
                setIsLoading(false)
            } 
            catch (error) {
                console.log(error)
                setIsLoading(false)
            }
        }
        fetchEvents();
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

                <div className='generalEvent-content' > 
                    
                    <div 
                        className='staff-pages-header-tilte' 
                        style={{marginLeft: '3rem'}} >
                        General Events
                    </div>
                    
                    <hr className='staff-page-hr' />

                    <div className='event-list-container'>
                        <div 
                            onClick={() => setShowCreate(true)}
                            className='add-event-card'>
                            <div 
                                className='add-event-icon' 
                                title='Create an event'/>
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                        {
                        events.map(event =>(
                        <div 
                            className='gradient-blue-card-container' 
                            style={{padding:'1rem', fontSize: '15px'}} >
                                <div 
                                    className='top-left-text' 
                                    style={{padding:'1rem', fontSize: '17px'}} >
                                    {event.title}
                                </div>
                                <div
                                    onClick={() => {
                                        setShowDelete(true)
                                        setEventID(event.id)
                                        setTitleInput(event.title)
                                    }}
                                    className='top-right-text'
                                    title={`delete "${event.title}"`}>
                                    <div className='delete-icon'/>
                                </div>
                                <h4 style={{position: 'absolute', bottom:0, padding:'1rem', paddinTop:0}}>
                                    {event.description}
                                    <br/>
                                </h4>
                                <div style={{fontSize: 11,position: 'absolute', bottom:0, padding:'1rem'}}>
                                    Created: {event.create_date} at {event.create_time}
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
                                onClick={deleteEvent} 
                                className="delete-pop-up-yes">Yes</div>
                            <div
                                onClick={() => setShowDelete(false)} 
                                className="delete-pop-up-no">No</div>
                        </div>

                    </div>
                    : []
                }

                <CreateEvent 
                    showCreate={showCreate} 
                    setShowCreate={setShowCreate}
                    createEvent={createEvent}
                    titleInput={titleInput}
                    setTitleInput={setTitleInput}
                    createDate={createDate}
                    setCreateDate={setCreateDate}
                    createTime={createTime}
                    setCreateTime={setCreateTime}
                    descriptionInput={descriptionInput}
                    setDescriptionInput={setDescriptionInput}
                    placeInput={placeInput}
                    setPlaceInput={setPlaceInput}
                    eventDateInput={eventDateInput}
                    setEventDateInput={setEventDateInput}/>
            </div>
        </div>
    );
}

export default GeneralEvents;