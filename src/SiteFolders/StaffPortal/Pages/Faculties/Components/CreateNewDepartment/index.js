/* 
    The Pup-out window that allows the admin to create 
    a new department. 
    By default the display is set to false.
 */

import React from 'react';

function CreateNewDepartment({
    showCreateDepartment,
    createNewDepartment,
    departmentStateDetails,
}) {
    return (
        <div 
            className='pop-out-window'
            style={{ display:showCreateDepartment === false ? 'none' : ''}} >
                <div className='pop-up-title'>Create a new Department</div>
                <input
                    className='lg-pop-up-input'
                    placeholder='Department Name'
                    value={departmentStateDetails.departmentNameInputValue}
                    onChange={e => departmentStateDetails.setDepartmentNameInputValue(e.target.value)}
                />
                <input
                    className='lg-pop-up-input'
                    placeholder='Head Of Department'
                    value={departmentStateDetails.headofDepartmentInputValue}
                    onChange={e => departmentStateDetails.setHeadofDepartmentInputValue(e.target.value)}
                />
                <div 
                    className='close-pop-up-icon' 
                    onClick={ () => departmentStateDetails.setShowCreateDepartment(false)} />
                <div 
                    onClick={ createNewDepartment } 
                    className='create-pop-up-button'
                >Create</div>
        </div>
    );
}

export default CreateNewDepartment;