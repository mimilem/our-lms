import React from 'react';

import './generalStaffList.css';


function GeneralStaffList() {
    return (
        <div className='userList-container'>
            
            <div className='roleAndUser-container'>
                <div className='role-user-title'>Admin(s)</div>
                <hr className='staff-page-hr'/>

                <div className='user-container'>
                    <div className='generalStaff-profile-picture'/>
                    <div className='generalStaff-names'>Name + <b>Surname</b></div>
                    <div className='generalStaff-view-profile'>View Profile</div>
                </div>
            </div>

            <div className='roleAndUser-container'>
                <div className='role-user-title'>Head of departments</div>
                <hr className='staff-page-hr'/>
                <div className='user-container'>
                    <div className='generalStaff-profile-picture'/>
                    <div className='generalStaff-names'>Name + <b>Surname</b></div>
                    <div className='generalStaff-view-profile'>View Profile</div>
                </div>
            </div>

            <div className='roleAndUser-container'>
                <div className='role-user-title'>Teachers</div>
                <hr className='staff-page-hr'/>
                <div className='user-container'>
                    <div className='generalStaff-profile-picture'/>
                    <div className='generalStaff-names'>Name + <b>Surname</b></div>
                    <div className='generalStaff-view-profile'>View Profile</div>
                </div>
            </div>

        </div>

    );
}

export default GeneralStaffList;