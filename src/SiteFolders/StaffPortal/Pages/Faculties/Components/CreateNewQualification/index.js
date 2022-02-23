/* 
    The Pup-out window that allows the admin to create
    a new qualification.
    By default the display is set to false. 
*/

import React from 'react';


function CreateNewQualification({
    showCreateQualification,
    createNewQualification,
    qualificationStateDetails
}) {
    return (
        <div 
            className='pop-out-window'
            style={{ display:showCreateQualification === false ? 'none' : ''}} >
                <div className='pop-up-title'>Create a new qualification</div>
                <input
                    className='lg-pop-up-input'
                    placeholder='Qualification Name'
                    value={qualificationStateDetails.qualificationNameInputValue}
                    onChange={e => qualificationStateDetails.setQualificationNameInputValue(e.target.value)}
                />
                <input
                    className='lg-pop-up-input'
                    placeholder='Qualification Level'
                    value={qualificationStateDetails.qualificationLevelInputValue}
                    onChange={e => qualificationStateDetails.setQualificationLevelInputValue(e.target.value)}
                />
                <input
                    className='lg-pop-up-input'
                    placeholder='Qualification Year (number only)'
                    value={qualificationStateDetails.qualificationYearInputValue}
                    onChange={e => qualificationStateDetails.setQualificationYearInputValue(e.target.value)}
                />
                <div 
                    className='close-pop-up-icon' 
                    onClick={ () => qualificationStateDetails.setShowCreateQualification(false)} />
                <div 
                    onClick={ createNewQualification } 
                    className='create-pop-up-button'
                >Create</div>
        </div>
    );
}

export default CreateNewQualification;