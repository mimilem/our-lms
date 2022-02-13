import React from 'react';

import './userList.css';


function UserList() {
    return (
        <div className='userList-container'>
            
            <div className='roleAndUser-container'>
                <div className='role-user-title'>Admin(s)</div>
                <hr className='staff-page-hr'/>
                <div className='user-container'>
                    <div className='manage-user-profile-picture'/>
                    <div className='manage-user-names'>Name + <b>Surname</b></div>
                    <div className='manage-user-view-profile'>View Profile</div>
                </div>
            </div>

            <div className='roleAndUser-container'>
                <div className='role-user-title'>Head of departments</div>
                <hr className='staff-page-hr'/>
                <div className='user-container'>
                    <div className='manage-user-profile-picture'/>
                    <div className='manage-user-names'>Name + <b>Surname</b></div>
                    <div className='manage-user-view-profile'>View Profile</div>
                </div>
            </div>

            <div className='roleAndUser-container'>
                <div className='role-user-title'>Teachers</div>
                <hr className='staff-page-hr'/>
                <div className='user-container'>
                    <div className='manage-user-profile-picture'/>
                    <div className='manage-user-names'>Name + <b>Surname</b></div>
                    <div className='manage-user-view-profile'>View Profile</div>
                </div>
            </div>

        </div>
    );
}

export default UserList;