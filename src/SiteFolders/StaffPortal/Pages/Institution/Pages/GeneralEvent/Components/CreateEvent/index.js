import React from 'react';

import './createEvent.css';


function CreateEvent({ 
    showCreate, 
    setShowCreate,
    createEvent,
    titleInput,
    setTitleInput,
    createDate,
    setCreateDate,
    createTime,
    setCreateTime,
    descriptionInput,
    setDescriptionInput,
    placeInput,
    setPlaceInput,
    eventDateInput,
    setEventDateInput,}) {

    return (
        <div 
            style={{ display:showCreate === false ? 'none' : ''}}
            className='pop-out-window'>
            <div className='create-course-pop-up-title'>
                Create an event
            </div>

            <input
                className='create-course-input'
                placeholder='Title'
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)} />
            <input
                className='create-course-input'
                placeholder='Date'
                value={eventDateInput}
                onChange={(e) => setEventDateInput(e.target.value)} />
            <input
                className='create-course-input'
                placeholder='Place'
                value={placeInput}
                onChange={(e) => setPlaceInput(e.target.value)} />
            <textarea
                id='courseOverview'
                className='create-course-input'
                placeholder='Describe the event here.'
                value={descriptionInput}
                onChange={(e) => setDescriptionInput(e.target.value)} />

            <div 
                onClick={() => setShowCreate(false)}
                className='close-pop-up-icon' />
            <div 
                onClick={createEvent}
                className='create-pop-up-button' >
                Create
            </div>
            <div style={{paddingBottom: '5rem'}} />

        </div>
    );
}

export default CreateEvent;