import React, {useState} from 'react';

import AllStudentsList from './AllStudentsList';

import './studentsList.css';


function StudentsList() {


    return (
        <div className='studentList-container'>

            <div className='studentList-header'>
                <button className='allStudents-active-button'>
                    Students
                </button>
            </div>

            <hr className='staff-page-hr' style={{marginTop:10}}/>

            <AllStudentsList />
        </div>
    );
}

export default StudentsList;