import React, { useEffect } from 'react';

import './createNotifications.css';


function CreateNotifications({ 
    showCreate, 
    setShowCreate,
    createNotification,
    titleInput,
    setTitleInput,
    descriptionInput, 
    setDescriptionInput, }) {

    return (
        <div 
            style={{ display:showCreate === false ? 'none' : ''}}
            className='pop-out-window'>
            <div className='create-course-pop-up-title'>
                Create a notification
            </div>

            <input
                className='create-course-input'
                placeholder='Title'
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
            />
            <textarea
                id='courseOverview'
                className='create-course-input'
                placeholder='Describe the notification here.'
                value={descriptionInput}
                onChange={(e) => setDescriptionInput(e.target.value)} />

            <div 
                onClick={() => setShowCreate(false)}
                className='close-pop-up-icon' />
            <div 
                onClick={createNotification}
                className='create-pop-up-button' >
                Create
            </div>
            <div style={{paddingBottom: '5rem'}}/>

        </div>
    );
}

export default CreateNotifications;