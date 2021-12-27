import React from 'react';

import './pendingStudentsList.css';

import userAvatar from '../../../../../assets/user-avatar.png';


function PendingStudentsList() {
    return (
        <div className='allStudentsList-container'>
            
            <div className='student-card-container' title='View Profile'>
            
                <div className='pending-status' title='pending'/>

                <div className='pending-userAvatar-icon-container'>
                    <img 
                        src={userAvatar}
                        alt=''
                        className='userAvatar-icon'/>
                </div>

                <div className='student-name-text'>
                    Nephthali Salam
                </div>

                <div className='student-class-text'>
                    Grade 12
                </div>

            </div>


            <div className='student-card-container' title='View Profile'>
            
                <div className='pending-status' title='pending'/>

                <div className='pending-userAvatar-icon-container'>
                    <img 
                        src={userAvatar}
                        alt=''
                        className='userAvatar-icon'/>
                </div>

                <div className='student-name-text'>
                    Nephthali Salam
                </div>

                <div className='student-class-text'>
                    Grade 12
                </div>
                
            </div>
            <div className='student-card-container' title='View Profile'>
            
                <div className='pending-status' title='pending'/>

                <div className='pending-userAvatar-icon-container'>
                    <img 
                        src={userAvatar}
                        alt=''
                        className='userAvatar-icon'/>
                </div>

                <div className='student-name-text'>
                    Nephthali Salam
                </div>

                <div className='student-class-text'>
                    Grade 12
                </div>
                
            </div>
            <div className='student-card-container' title='View Profile'>
            
                <div className='pending-status' title='pending'/>

                <div className='pending-userAvatar-icon-container'>
                    <img 
                        src={userAvatar}
                        alt=''
                        className='userAvatar-icon'/>
                </div>

                <div className='student-name-text'>
                    Nephthali Salam
                </div>

                <div className='student-class-text'>
                    Grade 12
                </div>
                
            </div>
        
        </div>
    );
}

export default PendingStudentsList;