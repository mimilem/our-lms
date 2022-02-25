/*
    The Pup-out window that allows the admin to create
    a new campus. 
    By default the display is set to false.
*/

import React from 'react';


function CreateNewCampus({
    setShowCreateCampus, 
    showCreateCampus, 
    fileUrl,
    onChangeHandler,
    campusStateDetails,
    createNewCampus,
}) {
    return (
        <div 
            className='pop-out-window'
            style={{ display:showCreateCampus === false ? 'none' : ''}} >
                <div className='pop-up-title' >Create a new Campus</div>

                <img 
                    style={{marginTop:'-2rem'}} 
                    src={fileUrl} 
                    alt='' 
                    className='createUser-profile-picture' />
                
                <input
                    style={{
                        background:'red', 
                        position:'absolute', 
                        top: '17%', 
                        marginLeft:'44%', 
                        width: '4.5rem', 
                        opacity:0}} 
                    onChange={onChangeHandler}
                    id='fileid' type='file' name='filename'/>

                <input
                    className='lg-pop-up-input'
                    placeholder='Institution name'
                    value={campusStateDetails.institutionNameInputvalue}
                    onChange={e => campusStateDetails.setInstitutionNameInputvalue(e.target.value)}
                />
                <input
                    className='lg-pop-up-input'
                    placeholder='Campus name'
                    value={campusStateDetails.campusNameInputValue}
                    onChange={e => campusStateDetails.setCampusNameInputValue(e.target.value)}
                />
                <input
                    className='lg-pop-up-input'
                    placeholder='Head of campus'
                    value={campusStateDetails.campusHeadInputValue}
                    onChange={e => campusStateDetails.setCampusHeadInputValue(e.target.value)}
                />
                <input
                    className='lg-pop-up-input'
                    placeholder='City/Town'
                    value={campusStateDetails.campusCityInputValue}
                    onChange={e => campusStateDetails.setCampusCityInputValue(e.target.value)}
                />
                <input
                    className='lg-pop-up-input'
                    placeholder='Street address'
                    value={campusStateDetails.campusAddressInputValue}
                    onChange={e => campusStateDetails.setCampusAddressInputValue(e.target.value)}
                />
                <input
                    className='lg-pop-up-input'
                    placeholder='Phone number'
                    value={campusStateDetails.campusPhoneNumberInputValue}
                    onChange={e => campusStateDetails.setCampusPhoneNumberInputValue(e.target.value)}
                />
                <input
                    className='lg-pop-up-input'
                    placeholder='Email address'
                    value={campusStateDetails.campusEmailInputValue}
                    onChange={e => campusStateDetails.setCampusEmailInputValue(e.target.value)}
                />
                <div 
                    className='close-pop-up-icon' 
                    onClick={ () => setShowCreateCampus(false)} />
                <div 
                    onClick={ createNewCampus } 
                    className='create-pop-up-button'
                >Create</div>
        </div>
    );
}

export default CreateNewCampus;