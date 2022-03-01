import React from 'react';


function UpdateCampus({
    showUpdateWindow, 
    setShowUpdateWindow, 
    updateCampus, 
    campusId, 
    setCampusId}) {

    return (
        <div
            className='pop-out-window' 
            style={{ display:showUpdateWindow === false ? 'none' : ''}}>

            <div className='pop-up-title' >Update Campus</div>
            
            <input
                className='lg-pop-up-input'
                placeholder='Campus name'
                defaultValue={ campusId.campusName }
                onChange={e => setCampusId({
                    campusID: campusId.campusID,
                    campusName: e.target.value,
                    campusHead: campusId.campusHead,
                    campusCity: campusId.campusCity,
                    campusAdress: campusId.campusAdress,
                    campusPhoneNumber: campusId.campusPhoneNumber,
                    campusEmailAddress: campusId.campusEmailAddress,
                })}
            />
            <input
                className='lg-pop-up-input'
                placeholder='Head of campus'
                defaultValue={ campusId.campusHead }
                onChange={e => setCampusId({
                    campusID: campusId.campusID,
                    campusHead: e.target.value,
                    campusName: campusId.campusName,
                    campusCity: campusId.campusCity,
                    campusAdress: campusId.campusAdress,
                    campusPhoneNumber: campusId.campusPhoneNumber,
                    campusEmailAddress: campusId.campusEmailAddress,
                })}
            />
            <input
                className='lg-pop-up-input'
                placeholder='City/Town'
                defaultValue={ campusId.campusCity }
                onChange={e => setCampusId({
                    campusID: campusId.campusID,
                    campusCity: e.target.value,
                    campusHead: campusId.campusHead,
                    campusName: campusId.campusName,
                    campusAdress: campusId.campusAdress,
                    campusPhoneNumber: campusId.campusPhoneNumber,
                    campusEmailAddress: campusId.campusEmailAddress,
                })}
            />
            <input
                className='lg-pop-up-input'
                placeholder='Street address'
                defaultValue={ campusId.campusAdress }
                onChange={e => setCampusId({
                    campusID: campusId.campusID,
                    campusAdress: e.target.value,
                    campusCity: campusId.campusCity,
                    campusHead: campusId.campusHead,
                    campusName: campusId.campusName,
                    campusPhoneNumber: campusId.campusPhoneNumber,
                    campusEmailAddress: campusId.campusEmailAddress,
                })}
                />
            <input
                className='lg-pop-up-input'
                placeholder='Phone number'
                defaultValue={ campusId.campusPhoneNumber }
                onChange={e => setCampusId({
                    campusID: campusId.campusID,
                    campusPhoneNumber: e.target.value,
                    campusAdress: campusId.campusAdress,
                    campusCity: campusId.campusCity,
                    campusHead: campusId.campusHead,
                    campusName: campusId.campusName,
                    campusEmailAddress: campusId.campusEmailAddress,
                })}
            />
            <input
                className='lg-pop-up-input'
                placeholder='Email address'
                defaultValue={ campusId.campusEmailAddress }
                onChange={e => setCampusId({
                    campusID: campusId.campusID,
                    campusEmailAddress: e.target.value,
                    campusPhoneNumber: campusId.campusPhoneNumber,
                    campusAdress: campusId.campusAdress,
                    campusCity: campusId.campusCity,
                    campusHead: campusId.campusHead,
                    campusName: campusId.campusName,
                })}
            />
            <div 
                className='close-pop-up-icon' 
                onClick={ () => setShowUpdateWindow(false)} />
            <div 
                onClick={ updateCampus } 
                className='create-pop-up-button'
            >Update</div>
        </div>
    );
}

export default UpdateCampus;