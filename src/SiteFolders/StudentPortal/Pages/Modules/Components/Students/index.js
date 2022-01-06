import React from 'react';

import './classStudents.css';

import StudentsList from '../../../../Components/StudentsList';


function Students() {
    return (
        <div className='class-students-container'>

            <div className='students-page-header'>
                <div className='search-students-container'>
                    <input
                        type='text'
                        placeholder='Search a student'
                        className='search-student'
                    />
                </div>

                <div className='register-button-container'>
                    <button 
                        className='register-button'
                        title='Register a student'>
                        Register
                    </button>
                </div>
            </div>
            <StudentsList />
        </div>
    );
}

export default Students;