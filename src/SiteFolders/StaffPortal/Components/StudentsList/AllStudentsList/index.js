import React from 'react';

import { Link } from 'react-router-dom';

import './allStudentsList.css';

import userAvatar from '../../../../../assets/ThatsMeSalam.jpg';


function AllStudentsList() {

    const studentName='Nephthali-Salam'
    
    return (
        <div className='allStudentsList-container'>
            
            <Link to={'/Staff/Students/Profile='+studentName}
                className='student-card-container' 
                title='View Profile'>
            
                <div className='active-status' title='active'/>

                <div className='userAvatar-icon-container'>
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

            </Link>
        </div>
    );
}

export default AllStudentsList;