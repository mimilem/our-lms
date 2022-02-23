/* 
    The Pup-out window that allows the admin to create 
    a new faculty or school. 
    By default the display is set to false 
*/


import React from 'react';

function CreateNewFaculty({
    showCreateFaculty,
    setShowCreateFaculty,
    fileUrl,
    onChangeHandler,
    createNewFaculty,
    facultyStateDetails
}) {
    return (
        <div 
            className='pop-out-window'
            style={{ display:showCreateFaculty === false ? 'none' : ''}} >
                <div className='pop-up-title' >Create a new Faculty</div>

                <img style={{marginTop:'-2rem'}} src={fileUrl} alt='' className='createUser-profile-picture'/>
                
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
                    placeholder='Faculty name'
                    value={facultyStateDetails.facultyNameInputValue}
                    onChange={e => facultyStateDetails.setFacultyNameInputValue(e.target.value)}
                />
                <input
                    className='lg-pop-up-input'
                    placeholder='Head of faculty'
                    value={facultyStateDetails.facultyHead}
                    onChange={e => facultyStateDetails.setFacultyHead(e.target.value)}
                />
                <input
                    className='lg-pop-up-input'
                    placeholder='Street address'
                    value={facultyStateDetails.facultyAddress}
                    onChange={e => facultyStateDetails.setFacultyAddress(e.target.value)}
                />
                <input
                    className='lg-pop-up-input'
                    placeholder='Phone number'
                    value={facultyStateDetails.facultyPhoneNumber}
                    onChange={e => facultyStateDetails.setFacultyPhoneNumber(e.target.value)}
                />
                <input
                    className='lg-pop-up-input'
                    placeholder='Email address'
                    value={facultyStateDetails.facultyEmail}
                    onChange={e => facultyStateDetails.setFacultyEmail(e.target.value)}
                />
                <div 
                    className='close-pop-up-icon' 
                    onClick={ () => setShowCreateFaculty(false)} />
                <div 
                    onClick={ createNewFaculty } 
                    className='create-pop-up-button'
                >Create</div>
        </div>
    );
}

export default CreateNewFaculty;