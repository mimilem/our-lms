import React from 'react';

import { Link } from 'react-router-dom';

import './allStudentsList.css';

import userAvatar from '../../../../../assets/ThatsMeSalam.jpg';
import userAvatar2 from '../../../../../assets/userAvatar2.jpg';
import userAvatar3 from '../../../../../assets/userAvatar3.jpeg';
import userAvatar4 from '../../../../../assets/userAvatar4.jpg';


function AllStudentsList() {

    const studentName='Nephthali-Salam'
    
    return (
        <>
            <div className='allStudentsList-container'>
                
                <Link to={'/Staff/Students/Profile='}
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

                <Link to={'/Staff/Students/Profile='}
                    className='student-card-container' 
                    title='View Profile'>
                
                    <div className='active-status' title='active'/>

                    <div className='userAvatar-icon-container'>
                        <img 
                            src={userAvatar2}
                            alt=''
                            className='userAvatar-icon'/>
                    </div>

                    <div className='student-name-text'>
                        Elon Musk
                    </div>

                    <div className='student-class-text'>
                        Grade 12
                    </div>

                </Link>
                <Link to={'/Staff/Students/Profile='}
                    className='student-card-container' 
                    title='View Profile'>
                
                    <div className='active-status' title='active'/>

                    <div className='userAvatar-icon-container'>
                        <img 
                            src={userAvatar3}
                            alt=''
                            className='userAvatar-icon'/>
                    </div>

                    <div className='student-name-text'>
                        Kylian Mbappé
                    </div>

                    <div className='student-class-text'>
                        Grade 12
                    </div>

                </Link>
                <Link to={'/Staff/Students/Profile='}
                    className='student-card-container' 
                    title='View Profile'>
                
                    <div className='active-status' title='active'/>

                    <div className='userAvatar-icon-container'>
                        <img 
                            src={userAvatar4}
                            alt=''
                            className='userAvatar-icon'/>
                    </div>

                    <div className='student-name-text'>
                        Sundar Pichai
                    </div>

                    <div className='student-class-text'>
                        Grade 12
                    </div>

                </Link>
            </div>
        </>
    );
}

export default AllStudentsList;